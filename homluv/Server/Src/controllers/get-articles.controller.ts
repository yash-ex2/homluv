import {ApiData} from "../models/api-data.model"
import {Model} from "../models/data-model.model"
import { fetchAll } from "../repositories/fetch-data"
import { Request,Response } from "express";
import { apiDataToModelMApping } from "../services/ApiDataToModelMapping.service";
export async function getArticles(req:Request,res:Response) {
    let category=req.query.category;
    let search=req.query.search;
    let url = `https://stage-api.homluv.com/api/nlc/articles?pagesize=16&page=${Number(req.query.page)}&ctr=3`;  
    if(category && category!='null' && category!='articles'){
        url = `https://stage-api.homluv.com/api/nlc/category?pagesize=16&page=${req.query.page}&category=${category}&ctr=12`;
    }
    console.log('url:',url)
    let middleWareResponse:Model[]=[];
    const data = await fetchAll(url) as ApiData[];
    middleWareResponse = apiDataToModelMApping(data);
    res.send(middleWareResponse)
}