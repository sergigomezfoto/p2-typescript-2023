import { DataItem, fetchJson } from "./fetch.js";
import { mkdirSync, writeFileSync } from "fs";
import { renderPages } from "./render_pages.js";
import { renderStyles } from "./render_styles.js";
import { renderIndexJs,renderDetailJs } from "./render_javascript.js";


//////////
////////////////////////
////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
const keyWord: string = 'red planet';  ////////////////////////////WORD TO CONSTRUCT//
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////
//////////

const keyWordSearch=keyWord.replaceAll(' ','%20');
const keyWordDir=keyWord.replaceAll(' ','-');
const itemsArray: DataItem[] = await fetchJson(keyWordSearch);
mkdirSync(`./${keyWordDir}_page/`,{ recursive: true });
mkdirSync(`./${keyWordDir}_page/styles/`,{ recursive: true });
mkdirSync(`./${keyWordDir}_page/js/`,{ recursive: true });
mkdirSync(`./${keyWordDir}_page/pages/`,{ recursive: true });
writeFileSync(`./${keyWordDir}_page/styles/styles.css`, renderStyles());
writeFileSync(`./${keyWordDir}_page/js/js.js`, renderIndexJs());
//writeFileSync(`./${keyWordDir}_page/js/jsdetail.js`, renderDetailJs());
writeFileSync(`./${keyWordDir}_page/index.html`, renderPages(keyWord, itemsArray));




