"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Typography = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
var FontColor;
(function (FontColor) {
    FontColor[FontColor["contrast"] = 0] = "contrast";
    FontColor[FontColor["normal"] = 1] = "normal";
})(FontColor || (FontColor = {}));
exports.Typography = styled_components_1.default.span `
  font-size: ${({ fontSize = '1em' }) => fontSize};
  font-family: ${({ theme, typeface = 'regular' }) => theme.fonts.face[typeface]};
  color: ${({ theme, color = 'normal' }) => Object.keys(FontColor).includes(color) ? theme.fonts.color[color] : color};
`;
