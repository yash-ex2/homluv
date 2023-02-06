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
exports.articleDetail = void 0;
const fetch_data_1 = require("../repositories/fetch-data");
const ApiDataToModelMapping_service_1 = require("../services/ApiDataToModelMapping.service");
function articleDetail(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let url = `https://stage-api.homluv.com/api/nlc/detail?title=${req.query.path}`;
        console.log('url:', url);
        let middleWareResponse = [];
        const data = yield (0, fetch_data_1.fetchAll)(url);
        middleWareResponse = (0, ApiDataToModelMapping_service_1.apiDataToModelMApping)(data);
        console.log(url);
        res.send(middleWareResponse);
    });
}
exports.articleDetail = articleDetail;
