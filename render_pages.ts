import { writeFileSync } from "fs";
import { DataItem } from "./fetch.js";


type OptionTypes = "index" | "detail";

const renderHeader = (title: string, page: OptionTypes) => `
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,500;0,900;1,400&display=fallback" rel="stylesheet">
    <link rel="stylesheet" href="${page === "index" ? './styles/styles.css' : '../styles/styles.css'}">
    ${page === "detail" ? `<base target="_blank">` : ''}
    <title>${title}</title>
</head>
`;
const renderFooter = () =>
    `       
    <footer>
            <span>This static page is using <a href="https://api.nasa.gov/" target="_blank">NASA's Image and Video Library API</a>. It has been created dynamically by <a href="https://sergigomez.com" taget="_blank">Sergi Gómez</a> using <a href="https://bun.sh/" target="_blank">Bun</a> and <a href="https://www.typescriptlang.org/" target="_blank">Typescript</a> on <b>${new Date().toLocaleString("en-US", { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, hourCycle: 'h23', }).replace(',', '<em style="font-weight: normal;font-style:normal;"> at </em>')}</b>. Take a look at the <a href="https://github.com/sergigomezfoto/p2-typescript-2023" target="_blank">Git Repository</a></span> 
    </footer>
`
const renderScripts = (page: OptionTypes) => {
    if (page === 'index') {
        return `
    <script src="./js/js.js"></script>
    `
    } else if (page === 'detail') {
        return //`<script src="../js/jsdetail.js"></script>`
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////// INDEX
const renderGallery = (title: string, dataArr: Array<DataItem>) => {
    let html = `<span class="index-title"><span>${title}</span></span><main class="index-main">`
    for (const item of dataArr) {
        html += `
        <div>
        <a href="./pages/${item.titleSlug}.html">
        <img class="gallery-img" src="${item.image}" alt="${item.ellipsisTitle}" width="100%" height="100%" />
        <div class="gallery-img-caption">
        <h1>${item.ellipsisTitle}</h1>
        <p>${item.center}</p>
        </div>  
        </a>
        </div>`;
    }
    html += `</main>`
    html += renderFooter();

    return html;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////// DETAIL
const renderDetailInterior = async (item: DataItem) => {
    try {
        const data = await fetch(item.images);
        const jsonResponse: string[] = await data.json();
        const matchMedium = jsonResponse.filter(it => it.includes('~medium'));
        const mediumImage = matchMedium.length < 1 ? item.originalImage : item.mediumImage;
        const metadata = jsonResponse.filter((e) => e.includes('.json')).toString();
        const d = new Date(item.date);
        const date = d.toDateString();
        console.log(
            item.titleSlug
        );
        return `
    <span class="detail-return"> <a href="../index.html" target="self"> home </a></span>    
    <main class="detail-main">
        <div class="detail-image">
            <h1 class="detail-title">${item.title}</h1>
            <figure>
                <a href="${item.originalImage}" target="_blank">
                    <img class="gallery-img" src="${mediumImage}" alt="${item.title}" />
                </a>
                <figcaption>
                    <span>Date taken</span>
                    <span>${date}</span>
                     <span>Authorship</span>
                      <span>NASA's ${item.center} centre</span>
                       <span>Keywords & Keyphrases</span>
                    <span> ${item.keywordsString}</span>
                    <a href="${metadata}">Metadata JSON</a>
                </figcaption>
            </figure>
            <h1>Behind the image</h1>
            <p class="detail-text">
                ${item.cleanText}
            </p>
        </div>
    </main>
                     
            `;
    } catch (error) {
        console.log(error);

    }

}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const renderDetail = async (title: string, dataArr: Array<DataItem>) => {
    // let test = true;
    for (const item of dataArr) {
        // if (test === true) {
        let html = `
        <!DOCTYPE html>
        <html lang="en">
        ${renderHeader(title + ' - ' + item.title, 'detail')}
        <body>
        ${await renderDetailInterior(item)}
        ${renderFooter()}
        ${renderScripts('detail')}
        </body>
        </html>
        `;
        writeFileSync(`./${title.replaceAll(' ', '-')}_page/pages/${item.titleSlug}.html`, html);
        // test = false;
        // }
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// GENERAL RENDER
export const renderPages = (title: string, dataArr: Array<DataItem>) => {
    renderDetail(title, dataArr);
    return `
    <!DOCTYPE html>
    <html lang="en">
    ${renderHeader(title, 'index')}
    <body>
    ${renderGallery(title, dataArr)}
    ${renderScripts('index')}
    </body>
    </html>
    `
}


