"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const misc_1 = require("../../../common/src/helpers/misc");
const useDebouncedEventListener = (eventType, eventHandler, debounceLag) => {
    react_1.useEffect(() => {
        window.addEventListener(eventType, misc_1.debounce(eventHandler, debounceLag));
        return () => {
            window.removeEventListener(eventType, misc_1.debounce(eventHandler, debounceLag));
        };
    }, []);
};
exports.default = useDebouncedEventListener;
