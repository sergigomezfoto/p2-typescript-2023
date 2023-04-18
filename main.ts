import { DataItem, fetchJson } from "./fetch.js";
import { mkdirSync, writeFileSync } from "fs";
import { renderIndex } from "./render_pages.js";
import { renderStyles } from "./render_styles.js";

const keyWord:string='nebula';
const itemsArray:DataItem[] = await fetchJson();

mkdirSync(`./${keyWord}_page/`,{ recursive: true });
mkdirSync(`./${keyWord}_page/styles/`,{ recursive: true });
writeFileSync(`./${keyWord}_page/styles/styles.css`, renderStyles());
writeFileSync(`./${keyWord}_page/index.html`, renderIndex(keyWord, itemsArray));

