"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styled_components_1 = __importDefault(require("styled-components"));
const react_redux_1 = require("react-redux");
const storeConfig_1 = __importDefault(require("../../store/storeConfig"));
const reducer_1 = require("./reducer");
const sagas_1 = require("./sagas");
const selectors_1 = require("./selectors");
const actionCreators_1 = require("./actionCreators");
const styled_1 = require("../styled");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const shareButton_1 = __importDefault(require("../shareButton"));
const { registerReducer, registerSaga } = storeConfig_1.default;
const QuoteBoxWrapper = styled_components_1.default.div `
  max-width: 600px;
  margin: 0px 50px;
  position: relative;
  display: flex;
  flex-direction: column;
`;
const QuoteMarkWrapper = styled_components_1.default.div `
  position: absolute;
  top: -50px;
  left: -50px;
`;
const QuoteTextWrapper = styled_components_1.default.div `
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: #b4b4b4;
  padding: 30px;
`;
const QuoteAuthorWrapper = styled_components_1.default.div `
  text-align: right;
  font-style: italic;
`;
const ShareButtonWrapper = styled_components_1.default.div `
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  border-radius: 50%;
  transition: background 0.2s;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;
const QuoteBox = () => {
    const currentQuote = react_redux_1.useSelector(selectors_1.getCurrentQuote);
    const dispatch = react_redux_1.useDispatch();
    react_1.useEffect(() => {
        registerReducer(reducer_1.reducer, 'quotes');
        registerSaga(sagas_1.rootQuoteSaga);
    }, []);
    react_1.useEffect(() => {
        dispatch(actionCreators_1.fetchQuote());
    }, []);
    return (!!currentQuote && (jsx_runtime_1.jsxs(QuoteBoxWrapper, { children: [jsx_runtime_1.jsx(QuoteMarkWrapper, { children: jsx_runtime_1.jsx(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faQuoteRight, color: "#927676", size: "6x" }, void 0) }, void 0), jsx_runtime_1.jsxs(QuoteTextWrapper, { children: [jsx_runtime_1.jsx(styled_1.Typography, Object.assign({ color: "contrast", fontSize: "1.5em" }, { children: currentQuote.text }), void 0), jsx_runtime_1.jsx(ShareButtonWrapper, { children: jsx_runtime_1.jsx(shareButton_1.default, {}, void 0) }, void 0)] }, void 0), jsx_runtime_1.jsx(QuoteAuthorWrapper, { children: jsx_runtime_1.jsxs(styled_1.Typography, Object.assign({ color: "#927676", fontSize: "2em" }, { children: ["-", currentQuote.author] }), void 0) }, void 0)] }, void 0)));
};
exports.default = QuoteBox;
