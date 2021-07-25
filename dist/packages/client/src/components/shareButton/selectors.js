"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShareDialogVisibility = void 0;
const reselect_1 = require("reselect");
const collection_1 = require("../../../../common/src/helpers/collection");
const getShare = (combinedAppState) => combinedAppState === null || combinedAppState === void 0 ? void 0 : combinedAppState.share;
exports.getShareDialogVisibility = reselect_1.createSelector(getShare, collection_1.getPropertyByName('dialogIsVisible'));
