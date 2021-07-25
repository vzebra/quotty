"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPropertyByName = void 0;
const getPropertyByName = (propertyName) => (obj) => (typeof obj === 'object' && obj !== null ? obj[propertyName] : undefined);
exports.getPropertyByName = getPropertyByName;
