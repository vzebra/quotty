"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.plugins = exports.optimization = exports.output = exports.mode = void 0;
const optimization_1 = __importDefault(require("./optimization"));
const plugins_1 = __importDefault(require("./plugins"));
const types_1 = require("./types");
const mode = types_1.Mode.PRODUCTION;
exports.mode = mode;
const output = {
    filename: '[name][contenthash].js'
};
exports.output = output;
const optimization = optimization_1.default(mode);
exports.optimization = optimization;
const plugins = plugins_1.default(mode);
exports.plugins = plugins;
