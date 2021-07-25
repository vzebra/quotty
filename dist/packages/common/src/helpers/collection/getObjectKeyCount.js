"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getObjectKeyCount = void 0;
const getObjectKeyCount = (obj) => typeof obj === 'object' && obj !== null ? Object.keys(obj).length : undefined;
exports.getObjectKeyCount = getObjectKeyCount;
