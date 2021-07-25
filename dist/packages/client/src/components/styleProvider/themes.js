"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultTheme = void 0;
const breakpoints_1 = __importDefault(require("./breakpoints"));
exports.defaultTheme = {
    palette: {
        background: {
            default: '#203864',
            contrast: '#ed7d31',
            light: '#7382a0'
        }
    },
    geometry: {},
    fonts: {
        face: {
            regular: "'Palanquin', sans-serif",
            header: "'Oswald', sans-serif"
        },
        color: {
            default: '#7f7f7f',
            contrast: '#fff'
        }
    },
    breakpoints: breakpoints_1.default
};
