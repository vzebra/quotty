"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPaginatedQuotes = void 0;
const paginationParams_1 = require("../../../common/src/interfaces/paginationParams");
const quote_1 = __importDefault(require("../models/quote"));
const defaultPageSize = paginationParams_1.PageSize.SMALL;
const defaultOffset = 0;
const getPaginatedQuotes = (paginationParams) => __awaiter(void 0, void 0, void 0, function* () {
    const { [paginationParams_1.PaginationParam.PAGE_SIZE]: limit = defaultPageSize, [paginationParams_1.PaginationParam.OFFSET]: offset = defaultOffset } = paginationParams;
    const order = [['id', 'ASC']];
    const quotesPage = yield quote_1.default.findAll({
        order,
        limit,
        offset
    });
    return quotesPage;
});
exports.getPaginatedQuotes = getPaginatedQuotes;
