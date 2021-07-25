"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pingRouter = void 0;
const express_1 = require("express");
const ping_1 = require("../../middleware/ping");
exports.pingRouter = express_1.Router();
exports.pingRouter.get('/', ping_1.respondPing);
