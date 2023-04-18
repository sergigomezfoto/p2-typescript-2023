import { fetchJson } from "./fetch.js";
import { writeFile } from "fs/promises";
const resultdata =  JSON.stringify(await fetchJson());

await writeFile('results.json', resultdata);

