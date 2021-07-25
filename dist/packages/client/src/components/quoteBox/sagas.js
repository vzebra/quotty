"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchQuoteSaga = exports.rootQuoteSaga = void 0;
const effects_1 = require("redux-saga/effects");
const actions_1 = require("./actions");
const actionCreators_1 = require("./actionCreators");
const index_1 = require("../../api/index");
function* rootQuoteSaga() {
    yield effects_1.takeEvery(actions_1.QuoteActionType.FETCH_QUOTE, fetchQuoteSaga);
}
exports.rootQuoteSaga = rootQuoteSaga;
function* fetchQuoteSaga() {
    try {
        const { data: randomQuote } = yield effects_1.call(index_1.getRandomQuote);
        yield effects_1.put(actionCreators_1.setCurrentQuote(randomQuote));
    }
    catch (error) {
        yield effects_1.put(actionCreators_1.reportFetchQuoteError(error));
    }
}
exports.fetchQuoteSaga = fetchQuoteSaga;
