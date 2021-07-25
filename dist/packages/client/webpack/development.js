"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.optimization = exports.entry = exports.devServer = exports.output = exports.resolve = exports.devtool = exports.mode = void 0;
const optimization_1 = __importDefault(require("./optimization"));
const types_1 = require("./types");
const mode = types_1.Mode.DEVELOPMENT;
exports.mode = mode;
const devtool = 'inline-source-map';
exports.devtool = devtool;
const resolve = {
    alias: {
        'react-dom': '@hot-loader/react-dom'
    }
};
exports.resolve = resolve;
const output = {
    filename: '[name].bundle.js'
};
exports.output = output;
const devServer = {
    port: 3000,
    historyApiFallback: true
};
exports.devServer = devServer;
const entry = ['react-hot-loader/patch', './src/client/index.tsx'];
exports.entry = entry;
const optimization = optimization_1.default(mode);
exports.optimization = optimization;
