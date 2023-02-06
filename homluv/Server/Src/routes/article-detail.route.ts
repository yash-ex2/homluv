const express = require('express');

import {articleDetail} from "../controllers/articleDetail.controller"

import cors from "cors";

const router  = express.Router();

router.use(cors());
router.get("/",articleDetail);

export default router



