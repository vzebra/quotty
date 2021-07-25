"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAppReady = void 0;
const actions_1 = require("./actions");
const setAppReady = () => ({
    type: actions_1.GlobalActionType.SET_READY
});
exports.setAppReady = setAppReady;
