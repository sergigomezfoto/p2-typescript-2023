import { DataItem } from "./fetch.js";



const renderHeader = (title: string) => `
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
</head>
`
const renderGallery = (title: string, dataArr: Array<DataItem>) => {
    let html = `<span class="main-title">${title}</span><main>`
    for (const item of dataArr) {
        html += `<div><a>
        <img src="${item.image}" alt="${item.ellipsisTitle}" width="100%" height="100%" />
      </a></div>`;
    }
    html += `</main><footer></footer>`
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
