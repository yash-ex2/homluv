import {ApiData} from "../models/api-data.model"
import {Model} from "../models/data-model.model"
import { fetchAll } from "../repositories/fetch-data"
import { Request,Response } from "express";
import { apiDataToModelMApping } from "../services/ApiDataToModelMapping.service";
export async function searchArticles(req:Request,res:Response) {
    let search=req.query.search;
    let url:string=`https://stage-api.homluv.com/api/nlc/articles?pagesize=16&page=${Number(req.query.page)}&search=${search}&ctr=21`
    let middleWareResponse:Model[]=[];
    console.log('url:',url)
    const data = await fetchAll(url) as ApiData[];
    middleWareResponse = apiDataToModelMApping(data);
    res.send(middleWareResponse)
}