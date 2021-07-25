"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const react_redux_1 = require("react-redux");
const storeConfig_1 = __importDefault(require("../../store/storeConfig"));
const reducer_1 = require("./reducer");
const actionCreators_1 = require("./actionCreators");
const sagas_1 = require("./sagas");
const { registerReducer, registerSaga } = storeConfig_1.default;
const ShareButton = () => {
    const dispatch = react_redux_1.useDispatch();
    const openDialog = () => dispatch(actionCreators_1.setDialogVisibility(true));
    react_1.useEffect(() => {
        registerReducer(reducer_1.reducer, 'share');
        registerSaga(sagas_1.rootShareSaga);
    }, []);
    return (jsx_runtime_1.jsx(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faShareAlt, size: "2x", color: "#fff", onClick: openDialog }, void 0));
};
exports.default = ShareButton;
