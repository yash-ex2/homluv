import express, { Request, Response } from "express";
import cors from "cors";
import allArtilces from "./routes/articles-list.route"
import articleDetail from "./routes/article-detail.route"
import searchArticle from "./routes/search-article.route"
const app = express();
app.use(cors());

app.use("/",allArtilces);
app.use("/articles",articleDetail);
app.use("/search",searchArticle);

app.listen(8000,async()=>{
    console.log("server running on Port 8000");
});