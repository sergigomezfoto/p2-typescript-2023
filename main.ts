import { DataItem, fetchJson } from "./fetch.js";
import { writeFile } from "fs/promises";
const resultdata = JSON.stringify(await fetchJson());




//await writeFile('results.json', resultdata);


// *********************************************************************************************************************
//test

// let testobj :any= {
//     href: "https://images-assets.nasa.gov/image/PIA15817/collection.json",
//     data: [
//       {
//         center: "JPL",
//         title: "The Helix Nebula: Unraveling at the Seams",
//         nasa_id: "PIA15817",
//         date_created: "2012-10-03T21:30:49Z",
//         "keywords": [
//             "Hubble Space Telescope",
//             "HST",
//             "Advanced Camera for Surveys",
//             "ACS",
//             "Omega Nebula",
//             "M17",
//             "Swan Nebula"
//         ],
//         media_type: "image",
//         description_508: "This image from NASA Spitzer and GALEX shows the Helix nebula, a dying star throwing a cosmic tantrum. In death, the star dusty outer layers are unraveling into space, glowing from the intense UV radiation being pumped out by the hot stellar core.",
//         secondary_creator: "NASA/JPL-Caltech",
//         description: "This image from NASA Spitzer and GALEX shows the Helix nebula, a dying star throwing a cosmic tantrum. In death, the star dusty outer layers are unraveling into space, glowing from the intense UV radiation being pumped out by the hot stellar core."
//       }
//     ],
//     links: [
//       {
//         href: "https://images-assets.nasa.gov/image/PIA15817/PIA15817~thumb.jpg",
//         rel: "preview",
//         render: "image"
//       }
//     ]
//   }
// let tst= new DataItem(testobj.href, testobj.data[0].title, testobj.links[0].href, testobj.data[0].center, testobj.data[0].date_created, testobj.data[0].description, testobj.data[0].keywords);
// console.log(tst.ellipsisTitle);