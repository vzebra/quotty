"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.respondPing = void 0;
const respondPing = (_req, res) => {
    const pong = {
        statusCode: 200,
        message: 'OK',
        time: new Date().toISOString()
    };
    res.send(JSON.stringify(pong));
};
exports.respondPing = respondPing;
