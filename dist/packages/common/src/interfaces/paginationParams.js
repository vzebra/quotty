"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationParam = exports.PageSize = void 0;
var PageSize;
(function (PageSize) {
    PageSize[PageSize["SMALL"] = 10] = "SMALL";
    PageSize[PageSize["MEDIUM"] = 50] = "MEDIUM";
    PageSize[PageSize["LARGE"] = 100] = "LARGE";
})(PageSize = exports.PageSize || (exports.PageSize = {}));
var PaginationParam;
(function (PaginationParam) {
    PaginationParam["PAGE_SIZE"] = "pageSize";
    PaginationParam["OFFSET"] = "offset";
})(PaginationParam = exports.PaginationParam || (exports.PaginationParam = {}));
