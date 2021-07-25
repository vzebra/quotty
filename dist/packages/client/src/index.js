"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_dom_1 = require("react-dom");
const index_1 = __importDefault(require("./components/index"));
const pageHead_1 = __importDefault(require("./components/pageHead"));
const styleProvider_1 = __importDefault(require("./components/styleProvider"));
const react_redux_1 = require("react-redux");
const storeConfig_1 = __importDefault(require("./store/storeConfig"));
const rootNode = document.getElementById('root');
const store = storeConfig_1.default.getStore();
react_dom_1.render(jsx_runtime_1.jsx(react_1.StrictMode, { children: jsx_runtime_1.jsxs(react_redux_1.Provider, Object.assign({}, { store }, { children: [jsx_runtime_1.jsx(pageHead_1.default, {}, void 0), jsx_runtime_1.jsx(styleProvider_1.default, { children: jsx_runtime_1.jsx(index_1.default, {}, void 0) }, void 0)] }), void 0) }, void 0), rootNode);
