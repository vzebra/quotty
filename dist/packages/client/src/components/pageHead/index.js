"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_helmet_1 = require("react-helmet");
const PageHead = () => {
    return (jsx_runtime_1.jsxs(react_helmet_1.Helmet, { children: [jsx_runtime_1.jsx("title", { children: "Quotty" }, void 0), jsx_runtime_1.jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0), jsx_runtime_1.jsx("link", { rel: "preconnect", href: "https://fonts.gstatic.com" }, void 0), jsx_runtime_1.jsx("link", { href: "https://fonts.googleapis.com/css2?family=Palanquin&family=Oswald:wght@300&display=swap", rel: "stylesheet" }, void 0)] }, void 0));
};
exports.default = PageHead;
