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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPaginatedQuotes = void 0;
const getPaginatedQuotes_1 = require("../../services/getPaginatedQuotes");
const quote_1 = require("../../schema/quote");
const getPaginatedQuotes = (req, res) => {
    const paginationParams = req.query;
    quote_1.getPaginatedQuotes
        .validateAsync(paginationParams)
        .then((paginationParams) => __awaiter(void 0, void 0, void 0, function* () {
        const quotesPage = yield getPaginatedQuotes_1.getPaginatedQuotes(paginationParams);
        quotesPage.length ? res.send(quotesPage) : res.sendStatus(404);
    }))
        .catch(({ message }) => res.status(400).send(message));
};
exports.getPaginatedQuotes = getPaginatedQuotes;
