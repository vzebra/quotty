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
exports.updateQuote = void 0;
const updateQuote_1 = require("../../services/updateQuote");
const quote_1 = require("../../schema/quote");
const updateQuote = (req, res) => {
    const { id } = req.params;
    const quoteDetails = __rest(req.body, []);
    quote_1.updateQuote
        .validateAsync(Object.assign({ id }, quoteDetails))
        .then((_a) => __awaiter(void 0, void 0, void 0, function* () {
        var { id } = _a, quoteDetails = __rest(_a, ["id"]);
        const updatedQuote = yield updateQuote_1.updateQuote(Object.assign({ id }, quoteDetails));
        updatedQuote ? res.send(updatedQuote) : res.sendStatus(404);
    }))
        .catch(({ message }) => res.status(400).send(message));
};
exports.updateQuote = updateQuote;
