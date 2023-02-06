"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiDataToModelMApping = void 0;
const apiData_model_1 = require("../models/apiData.model");
function apiDataToModelMApping(data) {
    let middleWareResponse = [];
    data.map((item) => {
        let mappedData = new apiData_model_1.Model(item);
        middleWareResponse.push(mappedData);
    });
    return middleWareResponse;
}
exports.apiDataToModelMApping = apiDataToModelMApping;
