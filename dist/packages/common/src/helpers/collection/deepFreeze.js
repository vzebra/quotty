"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepFreeze = void 0;
const deepFreeze = (obj) => {
    if (typeof obj !== 'object' || obj === null)
        return;
    Object.freeze(obj);
    Object.keys(obj).forEach((key) => exports.deepFreeze(obj[key]));
};
exports.deepFreeze = deepFreeze;
