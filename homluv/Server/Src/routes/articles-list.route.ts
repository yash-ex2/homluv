const express = require('express');
import {getArticles} from "../controllers/get-articles.controller"
import cors from "cors";

const router  = express.Router();

router.use(cors());

router.get("/",getArticles);


export default router



