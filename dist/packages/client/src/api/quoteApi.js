"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomQuote = void 0;
const config_1 = require("./config");
const getRandomQuote = () => config_1.getQuote('/random');
exports.getRandomQuote = getRandomQuote;
