"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPaginatedQuotes = void 0;
const joi_1 = __importDefault(require("joi"));
const constraints_1 = require("./constraints");
const interfaces_1 = require("../../../../common/src/interfaces");
exports.getPaginatedQuotes = joi_1.default.object({
    [interfaces_1.PaginationParam.PAGE_SIZE]: constraints_1.pageSizeConstraint,
    [interfaces_1.PaginationParam.OFFSET]: constraints_1.offsetConstraint
});
