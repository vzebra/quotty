"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setOrientation = void 0;
const actions_1 = require("./actions");
const setOrientation = (orientation) => ({
    type: actions_1.StylingActionType.SET_ORIENTATION,
    payload: { orientation }
});
exports.setOrientation = setOrientation;
