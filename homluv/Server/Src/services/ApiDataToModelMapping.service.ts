import { ApiData,Model } from "../models/apiData.model";

export function apiDataToModelMApping(data:ApiData[]){
    let middleWareResponse:Model[]=[];
    data.map((item: ApiData) => {
        let mappedData = new Model(item);
        middleWareResponse.push(mappedData);
    })
    return middleWareResponse;
}