"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const search_artilces_controller_1 = require("../controllers/search-artilces.controller");
const cors_1 = __importDefault(require("cors"));
const router = express.Router();
router.use((0, cors_1.default)());
router.get("/", search_artilces_controller_1.searchArticles);
exports.default = router;
