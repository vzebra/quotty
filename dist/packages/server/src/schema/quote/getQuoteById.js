"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuoteById = void 0;
const joi_1 = __importDefault(require("joi"));
const constraints_1 = require("./constraints");
exports.getQuoteById = joi_1.default.object({
    id: constraints_1.idConstraint.required()
});
