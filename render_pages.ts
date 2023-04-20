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
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,500;0,900;1,400&display=fallback" rel="stylesheet">
    <link rel="stylesheet" href="${page === "index" ? './styles/styles.css' : '../styles/styles.css'}">
    <title>${title}</title>
</head>
`;
const renderFooter = () =>
    `       
    <footer>
            <span>This static pageis using <a href="https://api.nasa.gov/" target="_blank">NASA's Image and Video Library API</a>. It has been created dynamically by <a href="https://sergigomez.com" taget="_blank">Sergi Gómez</a> using <a href="https://bun.sh/" target="_blank">Bun</a> and <a href="https://www.typescriptlang.org/" target="_blank">Typescript</a> on <b>${new Date().toLocaleString("en-US", { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, hourCycle: 'h23', }).replace(',', '<em style="font-weight: normal;font-style:normal;"> at </em>')}</b>. Take a look at the <a href="https://github.com/sergigomezfoto/p2-typescript-2023" target="_blank">Git Repository</a></span> 
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

    <h1 class="detail-title">Planetary Nebula</h1>
    <div class="detail-image">
        <figure>
            <a href="https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001955/GSFC_20171208_Archive_e001955~orig.jpg"
                target="_blank">
                <img class="gallery-img"
                    src="https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001955/GSFC_20171208_Archive_e001955~medium.jpg"
                    alt="Hubble reveals heart of Lagoon Nebula" />
            </a>
            <figcaption><span>Date taken</span><span>2023/08/21</span> <span>Authorship</span> <span>NASA's CFT centre</span> <span>Keywords & Keyphrases</span>
                <span> Hubble Space Telescope · Cat's Eye Nebula · catseyenebula</span></figcaption>
        </figure>
        <h1>Behind the image</h1>
    
        <p class="detail-text">
            This planetary nebula's simple, graceful appearance is thought to be due to perspective: our view from
            Earth looking straight into what is actually a barrel-shaped cloud of gas shrugged off by a dying
            central star. Hot blue gas near the energizing central star gives way to progressively cooler green and
            yellow gas at greater distances with the coolest red gas along the outer boundary. Credit: NASA/Hubble
            Heritage Team ---- The Ring Nebula's distinctive shape makes it a popular illustration for astronomy
            books. But new observations by NASA's Hubble Space Telescope of the glowing gas shroud around an old,
            dying, sun-like star reveal a new twist. &quot;The nebula is not like a bagel, but rather, it's like a
            jelly doughnut, because it's filled with material in the middle,&quot; said C. Robert O'Dell of
            Vanderbilt University in Nashville, Tenn. He leads a research team that used Hubble and several
            ground-based telescopes to obtain the best view yet of the iconic nebula. The images show a more complex
            structure than astronomers once thought and have allowed them to construct the most precise 3-D model of
            the nebula. &quot;With Hubble's detail, we see a completely different shape than what's been thought
            about historically for this classic nebula,&quot; O'Dell said. &quot;The new Hubble observations show
            the nebula in much clearer detail, and we see things are not as simple as we previously thought.&quot;
            The Ring Nebula is about 2,000 light-years from Earth and measures roughly 1 light-year across. Located
            in the constellation Lyra, the nebula is a popular target for amateur astronomers. Read more: <a
                href=\"http://1.usa.gov/14VAOMk\" rel=\"nofollow\">1.usa.gov/14VAOMk</a> <b><a
                    href=\"http://www.nasa.gov/audience/formedia/features/MP_Photo_Guidelines.html\"
                    rel=\"nofollow\">NASA image use policy.</a></b> <b><a
                    href=\"http://www.nasa.gov/centers/goddard/home/index.html\" rel=\"nofollow\">NASA Goddard Space
                    Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science,
            Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s
            accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission.
            <b>Follow us on <a href=\"http://twitter.com/NASAGoddardPix\" rel=\"nofollow\">Twitter</a></b> <b>Like
                us on <a href=\"http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd\"
                    rel=\"nofollow\">Facebook</a></b> <b>Find us on <a
                    href=\"http://instagram.com/nasagoddard?vm=grid\" rel=\"nofollow\">Instagram</a></b>
        </p>
    </div>

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


