"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const html_webpack_plugin_1 = __importDefault(require("html-webpack-plugin"));
const clean_webpack_plugin_1 = require("clean-webpack-plugin");
const compression_webpack_plugin_1 = __importDefault(require("compression-webpack-plugin"));
const types_1 = require("./types");
const HtmlPlugin = new html_webpack_plugin_1.default({
    template: path_1.default.resolve(__dirname, '../../public/index.html'),
    filename: 'index.html'
});
const CleanPlugin = new clean_webpack_plugin_1.CleanWebpackPlugin();
const CompressPlugin = new compression_webpack_plugin_1.default({
    filename: '[path][base].br',
    algorithm: 'brotliCompress',
    test: /\.(js|css|html|svg)$/,
    threshold: 10240,
    minRatio: 0.8,
    deleteOriginalAssets: false
});
const getPlugins = (mode) => [
    HtmlPlugin,
    CleanPlugin,
    ...(mode === types_1.Mode.PRODUCTION ? [CompressPlugin] : [])
];
exports.default = getPlugins;
