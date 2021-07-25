"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchQuote = exports.reportFetchQuoteError = exports.setCurrentQuote = void 0;
const actions_1 = require("./actions");
const setCurrentQuote = (currentQuote) => ({
    type: actions_1.QuoteActionType.SET_CURRENT_QUOTE,
    currentQuote
});
exports.setCurrentQuote = setCurrentQuote;
const reportFetchQuoteError = (fetchError) => ({
    type: actions_1.QuoteActionType.REPORT_FETCH_QUOTE_ERROR,
    fetchError
});
exports.reportFetchQuoteError = reportFetchQuoteError;
const fetchQuote = () => ({
    type: actions_1.QuoteActionType.FETCH_QUOTE
});
exports.fetchQuote = fetchQuote;
