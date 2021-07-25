"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailQuote = void 0;
const config_1 = require("./config");
const emailQuote = (emailData) => config_1.postEmail('', emailData);
exports.emailQuote = emailQuote;
