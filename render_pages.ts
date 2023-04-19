import { DataItem } from "./fetch.js";

const renderHeader = (title: string) => `
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@900&display=fallback" rel="stylesheet">
    <link rel="stylesheet" href="./styles/styles.css">
    <title>${title}</title>
</head>
`
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

    html += `</main><footer></footer><script src="./js/js.js"></script>`
    return html;
}

export const renderIndex = (title: string, dataArr: Array<DataItem>) => {
    return `
<!DOCTYPE html>
<html lang="en">
${renderHeader(title)}
<body>
${renderGallery(title, dataArr)}
</body>
`

}
