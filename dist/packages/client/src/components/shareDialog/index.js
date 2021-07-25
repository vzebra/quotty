"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const selectors_1 = require("../shareButton/selectors");
const selectors_2 = require("../quoteBox/selectors");
const actionCreators_1 = require("../shareButton/actionCreators");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const styled_1 = require("../styled");
const ShareDialog = () => {
    const [email, setEmail] = react_1.useState('');
    const dispatch = react_redux_1.useDispatch();
    const isDialogVisible = react_redux_1.useSelector(selectors_1.getShareDialogVisibility);
    const quote = react_redux_1.useSelector(selectors_2.getCurrentQuote);
    const onClose = () => dispatch(actionCreators_1.setDialogVisibility(false));
    const onEmailChange = ({ target: { value } }) => setEmail(value);
    const onSendQuote = () => {
        dispatch(actionCreators_1.sendQuoteByEmail({ email, quote }));
        setEmail(null);
        onClose();
    };
    return (!!isDialogVisible && (jsx_runtime_1.jsx(styled_1.Overlay, { children: jsx_runtime_1.jsxs(styled_1.Dialog, { children: [jsx_runtime_1.jsxs(styled_1.DialogHeader, { children: [jsx_runtime_1.jsx(styled_1.DialogTitle, { children: jsx_runtime_1.jsx(styled_1.Typography, { children: "Share Quote of the Day" }, void 0) }, void 0), jsx_runtime_1.jsx(styled_1.CloseButton, Object.assign({ onClick: onClose }, { children: jsx_runtime_1.jsx(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faTimes }, void 0) }), void 0)] }, void 0), jsx_runtime_1.jsx(styled_1.DialogBody, { children: jsx_runtime_1.jsx("input", { type: "email", placeholder: "example@example.com", style: { height: 35, width: '70%' }, value: email, onChange: onEmailChange }, void 0) }, void 0), jsx_runtime_1.jsxs(styled_1.DialogFooter, { children: [jsx_runtime_1.jsxs(styled_1.Button, Object.assign({ onClick: onSendQuote }, { children: [jsx_runtime_1.jsx(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faPaperPlane }, void 0), jsx_runtime_1.jsx(styled_1.Typography, { children: "SEND" }, void 0)] }), void 0), jsx_runtime_1.jsxs(styled_1.Button, Object.assign({ onClick: onClose }, { children: [jsx_runtime_1.jsx(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faSignOutAlt }, void 0), jsx_runtime_1.jsx(styled_1.Typography, { children: "CANCEL" }, void 0)] }), void 0)] }, void 0)] }, void 0) }, void 0)));
};
exports.default = ShareDialog;
