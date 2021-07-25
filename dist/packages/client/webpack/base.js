"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const rules_1 = __importDefault(require("./rules"));
const resolve_1 = __importDefault(require("./resolve"));
const plugins_1 = __importDefault(require("./plugins"));
const types_1 = require("./types");
const mode = types_1.Mode.NONE;
const context = path_1.default.resolve(__dirname, '../..');
const entry = {
    app: path_1.default.resolve(context, 'src/client', 'index.tsx')
};
const output = {
    path: path_1.default.resolve(context, 'dist/')
};
const plugins = plugins_1.default(mode);
const baseConfig = {
    context,
    entry,
    output,
    resolve: resolve_1.default,
    module,
    plugins
};
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
baseConfig.module = { rules: rules_1.default };
exports.default = baseConfig;
