"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const tsconfig_base_json_1 = __importDefault(require("../../../tsconfig.base.json"));
var Extension;
(function (Extension) {
    Extension["TS"] = ".ts";
    Extension["TSX"] = ".tsx";
    Extension["JS"] = ".js";
    Extension["JSX"] = ".jsx";
})(Extension || (Extension = {}));
const { compilerOptions: { paths } } = tsconfig_base_json_1.default;
const removeSlashAsterisk = (s) => s.replace('/*', '');
const alias = Object.keys(paths).reduce((acc, key) => {
    const webpackAlias = removeSlashAsterisk(key);
    const webpackPath = removeSlashAsterisk(paths[key][0]);
    acc[webpackAlias] = path_1.default.resolve(__dirname, '../../src/', webpackPath);
    return acc;
}, {});
const extensions = Object.values(Extension);
const resolve = {
    extensions,
    alias
};
exports.default = resolve;
