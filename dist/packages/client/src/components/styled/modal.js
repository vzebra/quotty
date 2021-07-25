"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = exports.DialogFooter = exports.DialogBody = exports.CloseButton = exports.DialogTitle = exports.DialogHeader = exports.Dialog = exports.Overlay = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Overlay = styled_components_1.default.div `
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  left: 0px;
`;
exports.Dialog = styled_components_1.default.div `
  width: 500px;
  height: 250px;
  background: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  color: #7f7f7f;
`;
exports.DialogHeader = styled_components_1.default.div `
  height: 10%;
  display: flex;
  padding-top: 10px;
  padding-left: 15px;
  padding-right: 15px;
`;
exports.DialogTitle = styled_components_1.default.div `
  margin: 10px;
  font-size: 1.2rem;
`;
exports.CloseButton = styled_components_1.default.div `
  margin-left: auto;
  font-size: 1.5rem;
  & svg {
    cursor: pointer;
  }
`;
exports.DialogBody = styled_components_1.default.div `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75%;
`;
exports.DialogFooter = styled_components_1.default.div `
  height: 10%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 15px;
`;
exports.Button = styled_components_1.default.div `
  width: 100px;
  height: 35px;
  background: #b4b4b4;
  border-radius: 5px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background 0.2s;
  margin-right: 10px;
  user-select: none;
  & svg {
    margin: 0px 5px;
  }
  &:hover {
    background: #927676;
  }
`;
