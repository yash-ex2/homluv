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
exports.searchArticles = void 0;
const fetch_data_1 = require("../repositories/fetch-data");
const ApiDataToModelMapping_service_1 = require("../services/ApiDataToModelMapping.service");
function searchArticles(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let search = req.query.search;
        let url = `https://stage-api.homluv.com/api/nlc/articles?pagesize=16&page=${Number(req.query.page)}&search=${search}&ctr=21`;
        let middleWareResponse = [];
        console.log('url:', url);
        const data = yield (0, fetch_data_1.fetchAll)(url);
        middleWareResponse = (0, ApiDataToModelMapping_service_1.apiDataToModelMApping)(data);
        res.send(middleWareResponse);
    });
}
exports.searchArticles = searchArticles;
