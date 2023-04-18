


class DataItem {
    constructor(
        public images: string,
        public title: string,
        public image: string,
        public center: string,
        public date: string,
        public description: string,
        public keywords: string[]
    ) { }

}


export const fetchJson = async () => {
    const data = await fetch("https://images-api.nasa.gov/search?q=nebula&media_type=image");
    const jsonResponse: any = await data.json();
    const cleanData: Array<DataItem> = [];
    for (const { href, data, links } of jsonResponse.collection.items) {
        cleanData.push(new DataItem(href, data[0].title, links[0].href, data[0].center, data[0].date_created, data[0].description, data[0].keywords));
    };
    return cleanData
}