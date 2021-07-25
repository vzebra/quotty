"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmailSaga = exports.rootShareSaga = void 0;
const effects_1 = require("redux-saga/effects");
const actions_1 = require("./actions");
const emailApi_1 = require("../../api/emailApi");
function* rootShareSaga() {
    yield effects_1.takeEvery(actions_1.ShareActionType.SEND_QUOTE_BY_EMAIL, sendEmailSaga);
}
exports.rootShareSaga = rootShareSaga;
function* sendEmailSaga(action) {
    try {
        yield effects_1.call(emailApi_1.emailQuote, action.payload);
    }
    catch (err) {
        console.log(err);
    }
}
exports.sendEmailSaga = sendEmailSaga;
