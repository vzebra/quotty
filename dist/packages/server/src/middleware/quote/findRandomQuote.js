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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findRandomQuote = void 0;
const randomQuoteParams_1 = require("../../../../common/src/interfaces/randomQuoteParams");
const findRandomQuote_1 = require("../../services/findRandomQuote");
const quote_1 = require("../../schema/quote");
const findRandomQuote = (req, res) => {
    const randomQuoteParams = __rest(req.query, []);
    let tagsContains = randomQuoteParams[randomQuoteParams_1.QueryParam.TAGS_CONTAINS] || [];
    tagsContains = Array.isArray(tagsContains)
        ? tagsContains
        : tagsContains.split(',');
    randomQuoteParams[randomQuoteParams_1.QueryParam.TAGS_CONTAINS] = tagsContains;
    quote_1.findRandomQuote
        .validateAsync(randomQuoteParams)
        .then((randomQuoteParams) => __awaiter(void 0, void 0, void 0, function* () {
        const randomQuote = yield findRandomQuote_1.findRandomQuote(randomQuoteParams);
        randomQuote ? res.send(randomQuote) : res.sendStatus(404);
    }))
        .catch(({ message }) => res.status(400).send(message));
};
exports.findRandomQuote = findRandomQuote;
