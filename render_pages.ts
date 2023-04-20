import { writeFileSync } from "fs";
import { DataItem } from "./fetch.js";

type OptionTypes ="index"|"detail";

const renderHeader = (title: string, page: OptionTypes) => `
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;900&display=fallback" rel="stylesheet">
    <link rel="stylesheet" href="${page === "index" ? './styles/styles.css' : '../styles/styles.css'}">
    <title>${title}</title>
</head>
`;
const renderFooter = () =>
    `       
    <footer>
            <span>This static page, using <a href="https://api.nasa.gov/" target="_blank">NASA's Image and Video Library API</a>, was created dynamically by <a href="https://sergigomez.com" taget="_blank">Sergi Gómez</a> using <a href="https://bun.sh/" target="_blank">Bun</a> and <a href="https://www.typescriptlang.org/" target="_blank">Typescript</a> on <b>${new Date().toLocaleString("en-US", { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, hourCycle: 'h23', }).replace(',', '<em style="font-weight: normal;font-style:normal;"> at </em>')}</b>. Take a look at the <a href="https://github.com/sergigomezfoto/p2-typescript-2023" target="_blank">Git Repository</a></span> 
    </footer>
`
const renderScripts = (page: OptionTypes) => {
    if (page === 'index') {
        return `
    <script src="./js/js.js"></script>
    `
    } else if (page === 'detail') {
        return `
        <script src="../js/jsdetail.js"></script>
        `
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////// INDEX
const renderGallery = (title: string, dataArr: Array<DataItem>) => {
    let html = `<span class="index-title">${title}</span><main class="index-main">`
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
const renderDetailInterior = (item: DataItem) =>
    `
    <main class="detail-main">

    <h1 class="detail-title">${item.title}</h1>
    
    
    </main>
`;

const renderDetail = (title: string, dataArr: Array<DataItem>) => {

    for (const item of dataArr) {
        let html = `
            <!DOCTYPE html>
        <html lang="en">
        ${renderHeader(title + '-' + item.keywordsString, 'detail')}
        <body>
        ${renderDetailInterior(item)}
        ${renderFooter()}
        ${renderScripts('detail')}
        </body>
        </html>
        `;
        writeFileSync(`./${title}_page/pages/${item.titleSlug}.html`, html);

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


