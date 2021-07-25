"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../services/config"));
const sequelize_1 = require("sequelize");
const uuid_1 = require("uuid");
const { UUIDV4, ARRAY, STRING, BOOLEAN, DATE } = sequelize_1.DataTypes;
class Quote extends sequelize_1.Model {
}
Quote.init({
    id: {
        type: UUIDV4,
        allowNull: false,
        defaultValue: uuid_1.v4(),
        primaryKey: true
    },
    author: {
        type: STRING
    },
    text: {
        type: STRING,
        allowNull: false
    },
    tags: {
        type: ARRAY(STRING),
        defaultValue: []
    },
    createdBy: {
        type: STRING
    },
    createdAt: {
        type: DATE
    },
    updatedAt: {
        type: DATE
    },
    isDeleted: {
        type: BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, {
    sequelize: config_1.default,
    modelName: 'quote',
    freezeTableName: true,
    timestamps: true
});
exports.default = Quote;
