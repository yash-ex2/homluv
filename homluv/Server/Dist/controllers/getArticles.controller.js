"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArticles = void 0;
const fetchData_1 = require("../repositories/fetchData");
const ApiDataToModelMapping_service_1 = require("../services/ApiDataToModelMapping.service");
function getArticles(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let category = req.query.category;
        let search = req.query.search;
        let url = `https://stage-api.homluv.com/api/nlc/articles?pagesize=16&page=${Number(req.query.page)}&ctr=3`;
        if (category && category != 'null' && category != 'articles') {
            url = `https://stage-api.homluv.com/api/nlc/category?pagesize=16&page=${req.query.page}&category=${category}&ctr=12`;
        }
        console.log('url:', url);
        let middleWareResponse = [];
        const data = yield (0, fetchData_1.fetchAll)(url);
        middleWareResponse = (0, ApiDataToModelMapping_service_1.apiDataToModelMApping)(data);
        res.send(middleWareResponse);
    });
}
exports.getArticles = getArticles;
