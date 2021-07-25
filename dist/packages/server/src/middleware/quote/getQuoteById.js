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
exports.getQuoteById = void 0;
const getQuoteById_1 = require("../../services/getQuoteById");
const quote_1 = require("../../schema/quote");
const getQuoteById = (req, res) => {
    const { id } = req.params;
    quote_1.getQuoteById
        .validateAsync({ id })
        .then(({ id }) => __awaiter(void 0, void 0, void 0, function* () {
        const match = yield getQuoteById_1.getQuoteById(id);
        match ? res.send(match) : res.sendStatus(404);
    }))
        .catch(({ message }) => res.status(400).send(message));
};
exports.getQuoteById = getQuoteById;
