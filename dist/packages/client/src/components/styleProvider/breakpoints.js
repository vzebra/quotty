"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.screenWidths = void 0;
exports.screenWidths = {
    xxs: 360,
    xs: 410,
    s: 640,
    m: 768,
    l: 1024,
    xl: 1440,
    xxl: 2560
};
const breakpoints = Object.keys(exports.screenWidths).reduce((acc, key) => {
    const screenWidth = exports.screenWidths[key];
    const mediaQuery = `(min-width: ${screenWidth}px)`;
    acc[key] = mediaQuery;
    return acc;
}, {});
exports.default = breakpoints;
