"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounce = void 0;
const debounce = (func, delay) => {
    let delayTimer;
    return (...args) => {
        const delayedFuncCall = () => {
            clearTimeout(delayTimer);
            func(...args);
        };
        clearTimeout(delayTimer);
        delayTimer = setTimeout(delayedFuncCall, delay);
    };
};
exports.debounce = debounce;
