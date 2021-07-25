"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const actions_1 = require("./actions");
const initialState = {
    appIsReady: false
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions_1.GlobalActionType.SET_READY: {
            return Object.assign(Object.assign({}, state), { appIsReady: true });
        }
        default:
            return state;
    }
};
exports.reducer = reducer;
