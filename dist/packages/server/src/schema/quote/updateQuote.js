"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateQuote = void 0;
const joi_1 = __importDefault(require("joi"));
const constraints_1 = require("./constraints");
exports.updateQuote = joi_1.default.object({
    id: constraints_1.idConstraint.required(),
    author: constraints_1.authorConstraint,
    text: constraints_1.textConstraint,
    tags: constraints_1.tagsConstraint
});
