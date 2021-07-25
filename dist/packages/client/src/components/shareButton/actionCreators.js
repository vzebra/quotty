"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendQuoteByEmail = exports.setDialogVisibility = void 0;
const actions_1 = require("./actions");
const setDialogVisibility = (payload) => ({
    type: actions_1.ShareActionType.SET_DIALOG_VISIBILITY,
    payload
});
exports.setDialogVisibility = setDialogVisibility;
const sendQuoteByEmail = (payload) => ({
    type: actions_1.ShareActionType.SEND_QUOTE_BY_EMAIL,
    payload
});
exports.sendQuoteByEmail = sendQuoteByEmail;
