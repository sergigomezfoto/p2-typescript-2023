import { DataItem, fetchJson } from "./fetch.js";
import { mkdirSync, writeFileSync } from "fs";
import { renderPages } from "./render_pages.js";
import { renderStyles } from "./render_styles.js";
import { renderIndexJs,renderDetailJs } from "./render_javascript.js";

const keyWord: string = 'nebula';
const itemsArray: DataItem[] = await fetchJson(keyWord);

mkdirSync(`./${keyWord}_page/`,{ recursive: true });
mkdirSync(`./${keyWord}_page/styles/`,{ recursive: true });
mkdirSync(`./${keyWord}_page/js/`,{ recursive: true });
mkdirSync(`./${keyWord}_page/pages/`,{ recursive: true });
writeFileSync(`./${keyWord}_page/styles/styles.css`, renderStyles());
writeFileSync(`./${keyWord}_page/js/js.js`, renderIndexJs());
writeFileSync(`./${keyWord}_page/js/jsdetail.js`, renderDetailJs());
writeFileSync(`./${keyWord}_page/index.html`, renderPages(keyWord, itemsArray));



// let arr=[
//     "Chandra X-ray Observatory,Hubble Space Telescope,Spitzer Space T"
// ];

