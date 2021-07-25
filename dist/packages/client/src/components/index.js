"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styled_components_1 = __importDefault(require("styled-components"));
const react_redux_1 = require("react-redux");
const actionCreators_1 = require("../store/actionCreators");
const quoteBox_1 = __importDefault(require("./quoteBox"));
const shareDialog_1 = __importDefault(require("./shareDialog"));
const MainWrapper = styled_components_1.default.div `
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const App = () => {
    const dispatch = react_redux_1.useDispatch();
    react_1.useEffect(() => {
        dispatch(actionCreators_1.setAppReady());
    }, []);
    return (jsx_runtime_1.jsxs(MainWrapper, { children: [jsx_runtime_1.jsx(quoteBox_1.default, {}, void 0), jsx_runtime_1.jsx(shareDialog_1.default, {}, void 0)] }, void 0));
};
exports.default = App;
