"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const actions_1 = require("./actions");
const initialState = {
    dialogIsVisible: false
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions_1.ShareActionType.SET_DIALOG_VISIBILITY: {
            const { payload: dialogIsVisible } = action;
            return Object.assign(Object.assign({}, state), { dialogIsVisible });
        }
        default:
            return state;
    }
};
exports.reducer = reducer;
