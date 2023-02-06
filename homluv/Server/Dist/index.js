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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const articles_list_route_1 = __importDefault(require("./routes/articles-list.route"));
const article_detail_route_1 = __importDefault(require("./routes/article-detail.route"));
const search_article_route_1 = __importDefault(require("./routes/search-article.route"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use("/", articles_list_route_1.default);
app.use("/articles", article_detail_route_1.default);
app.use("/search", search_article_route_1.default);
app.listen(8000, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("server running on Port 8000");
}));
