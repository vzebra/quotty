"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scriptRule = {
    test: /\.[tj]sx?$/,
    use: 'babel-loader',
    exclude: /node_modules/
};
const imgRule = {
    test: /\.(png|jpe?g)$/i,
    use: 'responsive-loader'
};
const rules = [scriptRule, imgRule];
exports.default = rules;
