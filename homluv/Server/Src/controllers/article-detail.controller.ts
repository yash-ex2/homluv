import {ApiData} from "../models/api-data.model"
import {Model} from "../models/data-model.model"
import { fetchAll } from "../repositories/fetch-data"
import { apiDataToModelMApping } from "../services/ApiDataToModelMapping.service";
import { Request,Response } from "express";

export async function articleDetail(req:Request,res:Response) {
    let url = `https://stage-api.homluv.com/api/nlc/detail?title=${req.query.path}`
    console.log('url:',url)
    let middleWareResponse:Model[]=[];
    const data = await fetchAll(url) as ApiData[];
    middleWareResponse = apiDataToModelMApping(data)
    console.log(url);
    res.send(middleWareResponse)
}