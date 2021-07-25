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
exports.getQuoteById = void 0;
const sequelize_1 = require("sequelize");
const quote_1 = __importDefault(require("../models/quote"));
const getQuoteById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const quote = yield quote_1.default.findOne({
        where: {
            [sequelize_1.Op.and]: {
                id,
                isDeleted: false
            }
        }
    });
    return quote;
});
exports.getQuoteById = getQuoteById;
