const express = require('express');
import {searchArticles} from "../controllers/search-artilces.controller"
import cors from "cors";

const router  = express.Router();

router.use(cors());

router.get("/",searchArticles);

export default router



