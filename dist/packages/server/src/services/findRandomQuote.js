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
exports.findRandomQuote = void 0;
const sequelize_1 = require("sequelize");
const quote_1 = __importDefault(require("../models/quote"));
const findRandomQuote = (randomQuoteParams) => __awaiter(void 0, void 0, void 0, function* () {
    const order = [sequelize_1.Sequelize.literal('random()')];
    const cond = Object.keys(randomQuoteParams).reduce((acc, key) => {
        const [field, op] = key.split('_');
        acc.push({
            [field]: {
                [sequelize_1.Op[op]]: randomQuoteParams[key]
            }
        });
        return acc;
    }, []);
    const where = {
        [sequelize_1.Op.and]: cond
    };
    const randomQuote = yield quote_1.default.findOne({
        where,
        order
    });
    return randomQuote;
});
exports.findRandomQuote = findRandomQuote;
