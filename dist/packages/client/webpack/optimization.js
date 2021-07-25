"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const prodOptimization = {
    runtimeChunk: 'single',
    splitChunks: {
        cacheGroups: {
            vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                chunks: 'all'
            }
        }
    }
};
const getOptimization = (mode) => (Object.assign({ nodeEnv: mode }, (mode === types_1.Mode.PRODUCTION && prodOptimization)));
exports.default = getOptimization;
