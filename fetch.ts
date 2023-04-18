


export class DataItem {

    constructor(
        public images: string,
        public title: string,
        public image: string,
        public center: string,
        public date: string,
        public description: string,
        public keywords: string[]
    ) { }

    get ellipsisTitle() {
        let limit: number = 45;
        if (this.title.length <= limit) {
            return this.title
        }
        return this.title.slice(0, (limit - 3)) + '...'
    }
    get mediumImage() {
        return this.image.replace(/~thumb\./, '~medium\.')
    }
    get originalImage() {
        return this.image.replace(/~thumb\./, '~orig\.')
    }
    get keywordsString(){
        return this.keywords.join(' · ')
    }
}


export const fetchJson = async (query: string = 'nebula') => {
    let cleanData: Array<DataItem> | string = [];
    try {
        const data = await fetch(`https://images-api.naa.gov/search?q=${query}&media_type=image`);
        const jsonResponse: any = await data.json();
        for (const { href, data, links } of jsonResponse.collection.items) {
            cleanData.push(new DataItem(href, data[0].title, links[0].href, data[0].center, data[0].date_created, data[0].description, data[0].keywords));
        };
        return cleanData
        
    } catch (error) {
       console.log(error);
    }
}