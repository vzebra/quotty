"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serveIndex = void 0;
const path_1 = __importDefault(require("path"));
const serveIndex = (_req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, '../../../../dist', 'index.html'));
};
exports.serveIndex = serveIndex;
