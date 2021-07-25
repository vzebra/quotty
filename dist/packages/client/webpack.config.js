"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const webpack_merge_1 = require("webpack-merge");
const webpack_1 = require("./webpack");
const types_1 = require("./webpack/types");
const configMap = {
    [types_1.Mode.DEVELOPMENT]: webpack_1.development,
    [types_1.Mode.PRODUCTION]: webpack_1.production
};
const webpackConfig = (_env, { mode }) => webpack_merge_1.merge(webpack_1.base, configMap[mode]);
exports.default = webpackConfig;
