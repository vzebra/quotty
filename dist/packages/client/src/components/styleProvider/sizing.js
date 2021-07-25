"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const breakpoints_1 = require("./breakpoints");
const minWidth = Math.min(...Object.values(breakpoints_1.screenWidths));
const sizing = styled_components_1.css `
  html,
  body,
  #root {
    margin: 0px;
    height: 100%;
    min-width: ${minWidth}px;
  }
`;
exports.default = sizing;
