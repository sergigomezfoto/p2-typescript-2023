


export class DataItem {

    constructor(
        public images: string,
        public title: string,
        public image: string,
        public center: string,
        public date: string,
        public description: string,
        public keywords: string[],
        public index:number
    ) { }
    
    get ellipsisTitle() {     
        return this.title.length > 40 ? this.title.slice(0,40).split(' ').slice(0, -1).join(' ') + '&hellip;' : this.title
    }
    get mediumImage() {
        return this.image.replace(/~thumb\./, '~medium\.')
    }
    get originalImage() {
        return this.image.replace(/~thumb\./, '~orig\.')
    }
    get keywordsString() {
        return this.keywords && this.keywords.join(' · ')
    }
    get titleSlug(){
        return  `${this.index}-${this.title.replace(/\s{2,}|\-{2,}|\r|\t|\n|[//!@#$%^&*(),.?"·'ºª\(\)\[\]\u2019=\+`´:{}|<>\u00C0-\u00ff\u201C\u201D]|’/g, "").trim().toLowerCase().replaceAll(' ','-').substring(0, 100 )}`;
    }
    get cleanText(){
        let untagedRegex=/[\b\s](https?:\/\/[\w\d\.-/]+\.*\b)/g;
        let unquoteText =this.description.replaceAll('\"','"');
        return unquoteText.replaceAll(untagedRegex,`<a href="$1" target="_blank"> link </a>`);
    }
}


export const fetchJson = async (query: string = 'nebula') => {
    const cleanData: Array<DataItem> = [];
    try {
        const data = await fetch(`https://images-api.nasa.gov/search?q=${query}&media_type=image`);
        const jsonResponse: any = await data.json();   
        let index:number =0;
        for (const { href, data, links } of jsonResponse.collection.items) {
            if (data[0].center && data[0].center.toLowerCase() !== 'arc' && data[0].center.toLowerCase() !== 'select') {
                index +=1;
                cleanData.push(new DataItem(href, data[0].title, links[0].href, data[0].center, data[0].date_created, data[0].description, data[0].keywords,index));              
            }
        };
    } catch (error) {
        console.log(error);
    }
    finally {
        return cleanData
    }
}