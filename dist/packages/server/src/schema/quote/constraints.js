"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.offsetConstraint = exports.pageSizeConstraint = exports.randomQuoteParamsConstraint = exports.isDeletedConstraint = exports.updatedAtConstraint = exports.createdAtConstraint = exports.createdByConstraint = exports.tagsConstraint = exports.textConstraint = exports.authorConstraint = exports.idConstraint = void 0;
const joi_1 = __importDefault(require("joi"));
const string_1 = require("../../../../common/src/helpers/string");
const interfaces_1 = require("../../../../common/src/interfaces");
exports.idConstraint = joi_1.default.string().custom(string_1.uuidChecker);
exports.authorConstraint = joi_1.default.string().min(2);
exports.textConstraint = joi_1.default.string().min(2);
exports.tagsConstraint = joi_1.default.array().items(joi_1.default.string());
exports.createdByConstraint = joi_1.default.string();
exports.createdAtConstraint = joi_1.default.date().max('now');
exports.updatedAtConstraint = joi_1.default.date().max('now');
exports.isDeletedConstraint = joi_1.default.boolean();
exports.randomQuoteParamsConstraint = {
    [interfaces_1.QueryParam.TAGS_CONTAINS]: joi_1.default.array().items(joi_1.default.string().min(1)),
    [interfaces_1.QueryParam.AUTHOR_EQ]: joi_1.default.string().min(2),
    [interfaces_1.QueryParam.AUTHOR_SUBSTRING]: joi_1.default.string().min(2),
    [interfaces_1.QueryParam.TEXT_SUBSTRING]: joi_1.default.string().min(1)
};
exports.pageSizeConstraint = joi_1.default.number().allow(...Object.values(interfaces_1.PageSize));
exports.offsetConstraint = joi_1.default.number().min(0);
