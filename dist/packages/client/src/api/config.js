"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postEmail = exports.getQuote = void 0;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = require("dotenv");
dotenv_1.config();
const quoteConfig = axios_1.default.create({
    baseURL: `${process.env.API_PROTOCOL}://${process.env.API_HOST}:${process.env.API_PORT}/api/quotes`
});
exports.getQuote = quoteConfig.get;
const emailConfig = axios_1.default.create({
    baseURL: `${process.env.EMAIL_ENDPOINT}`
});
exports.postEmail = emailConfig.post;
