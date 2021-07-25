"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const styled_components_1 = require("styled-components");
const themes_1 = require("./themes");
const sizing_1 = __importDefault(require("./sizing"));
const storeConfig_1 = __importDefault(require("../../store/storeConfig"));
const reducer_1 = require("./reducer");
const actionCreators_1 = require("./actionCreators");
const state_1 = require("../../../../common/src/interfaces/state");
const useDebouncedEventListener_1 = __importDefault(require("../../hooks/useDebouncedEventListener"));
const GlobalStyles = styled_components_1.createGlobalStyle `
    ${sizing_1.default}
`;
const { registerReducer } = storeConfig_1.default;
const StyleProvider = ({ children }) => {
    const dispatch = react_redux_1.useDispatch();
    const orientationSetter = () => {
        const { innerWidth, innerHeight } = window;
        const orientation = innerWidth > innerHeight ? state_1.Orientation.ALBUM : state_1.Orientation.PORTRAIT;
        dispatch(actionCreators_1.setOrientation(orientation));
    };
    useDebouncedEventListener_1.default('resize', orientationSetter, 200);
    react_1.useEffect(() => {
        registerReducer(reducer_1.reducer, 'styling');
    }, []);
    return (jsx_runtime_1.jsxs(styled_components_1.ThemeProvider, Object.assign({ theme: themes_1.defaultTheme }, { children: [jsx_runtime_1.jsx(GlobalStyles, {}, void 0), children] }), void 0));
};
exports.default = StyleProvider;
