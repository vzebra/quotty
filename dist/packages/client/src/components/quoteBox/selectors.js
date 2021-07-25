"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentQuote = void 0;
const reselect_1 = require("reselect");
const collection_1 = require("../../../../common/src/helpers/collection");
const getQuote = (combinedAppState) => combinedAppState === null || combinedAppState === void 0 ? void 0 : combinedAppState.quotes;
exports.getCurrentQuote = reselect_1.createSelector(getQuote, collection_1.getPropertyByName('currentQuote'));
