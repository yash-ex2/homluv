import { ApiData } from "./api-data.model";

export class Model {
    image!: string;
    title!: string;
    teaser!: string;
    author!: string;
    type!: string;
    metaDescription!: string;
    html!:string;
    urlTitle! : string;
    images!:Object[]
    constructor(data: ApiData) {
      this.image = data.image;
      this.title = data.title;
      this.teaser = data.teaser;
      this.author = data.author;
      this.type = data.type;
      this.metaDescription = data.metaDescription;
      this.html=data.html;
      this.images=data.images;
      this.urlTitle = data.urlTitle;
    }
}

