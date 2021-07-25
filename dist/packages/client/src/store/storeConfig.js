"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _StoreConfig_reducerRegistry, _StoreConfig_store, _StoreConfig_sagaMiddleware;
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const redux_saga_1 = __importDefault(require("redux-saga"));
const redux_devtools_extension_1 = require("redux-devtools-extension");
const reducer_1 = require("./reducer");
class StoreConfig {
    constructor() {
        _StoreConfig_reducerRegistry.set(this, {
            global: reducer_1.reducer
        });
        _StoreConfig_store.set(this, void 0);
        _StoreConfig_sagaMiddleware.set(this, redux_saga_1.default());
        this.buildStore = () => {
            __classPrivateFieldSet(this, _StoreConfig_store, redux_1.createStore(redux_1.combineReducers(__classPrivateFieldGet(this, _StoreConfig_reducerRegistry, "f")), redux_1.compose(redux_1.applyMiddleware(__classPrivateFieldGet(this, _StoreConfig_sagaMiddleware, "f")), redux_devtools_extension_1.composeWithDevTools())), "f");
        };
        this.getStore = () => __classPrivateFieldGet(this, _StoreConfig_store, "f");
        this.registerReducer = (reducer, reducerKey) => {
            __classPrivateFieldGet(this, _StoreConfig_reducerRegistry, "f")[reducerKey] = reducer;
            __classPrivateFieldGet(this, _StoreConfig_store, "f").replaceReducer(redux_1.combineReducers(__classPrivateFieldGet(this, _StoreConfig_reducerRegistry, "f")));
        };
        this.registerSaga = (saga) => {
            __classPrivateFieldGet(this, _StoreConfig_sagaMiddleware, "f").run(saga, __classPrivateFieldGet(this, _StoreConfig_store, "f"));
        };
        this.buildStore();
    }
}
_StoreConfig_reducerRegistry = new WeakMap(), _StoreConfig_store = new WeakMap(), _StoreConfig_sagaMiddleware = new WeakMap();
exports.default = new StoreConfig();
