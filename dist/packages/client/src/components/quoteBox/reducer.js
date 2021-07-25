"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const actions_1 = require("./actions");
const initialState = {
    currentQuote: null
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions_1.QuoteActionType.SET_CURRENT_QUOTE: {
            const { currentQuote } = action;
            return Object.assign(Object.assign({}, state), { currentQuote });
        }
        default:
            return state;
    }
};
exports.reducer = reducer;
