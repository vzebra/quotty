"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appendQuote = void 0;
const joi_1 = __importDefault(require("joi"));
const constraints_1 = require("./constraints");
exports.appendQuote = joi_1.default.object({
    author: constraints_1.authorConstraint.required(),
    tags: constraints_1.tagsConstraint,
    text: constraints_1.textConstraint.required()
});
