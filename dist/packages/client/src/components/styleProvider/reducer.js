"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const actions_1 = require("./actions");
const initialState = {
    orientation: null
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions_1.StylingActionType.SET_ORIENTATION: {
            const { orientation } = action.payload;
            return Object.assign(Object.assign({}, state), { orientation });
        }
        default:
            return state;
    }
};
exports.reducer = reducer;
