import {ApiData} from "../models/api-data.model"

export const fetchAll = async(url:string)=>{  
    try {
        const response = await fetch(url);
        const data: ApiData[] = await response.json();
        return data;
      } catch {
        console.log("There is some error fetching data.");
      }

}
