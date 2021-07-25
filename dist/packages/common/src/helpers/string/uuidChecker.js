"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uuidChecker = void 0;
/*
 *
 *   @name: uuidChecker
 *   @description: Joi custom method to check input string for
 *       basic format compliance according to RFC-4122 section 3
 *       (https://tools.ietf.org/html/rfc4122#section-3)
 *
 *   @param: [value: string] input value (expected uuid string)
 *   @param: [helper: object] object used to hook into Joi check
 *       to raise the error (through `error`) once any of
 *       formatting conditions are not met
 *   @return: source value on success or `error()` on failure
 *   @example:
 *       uuidChecker('z4335b06-f619-424f-b8a6-24a6b2834427')
 *       // => helpers.error('unexpected character') // initial 'z'
 *       uuidChecker('e4335b06-f619-424f-b8a6-24a6b2834427')
 *       // => 'e4335b06-f619-424f-b8a6-24a6b2834427' // valid uuid
 *
 */
const uuidChecker = (value, { error }) => {
    if (typeof value !== 'string')
        return error('wrong input data type (string is expected)');
    const valueLength = value.length;
    if (valueLength !== 36)
        return error('wrong input string length (has to be 36 chars)');
    const improperChars = /[^0-9a-f-]/i.test(value);
    if (improperChars)
        return error('input value contains unexpected character(s) (a-f, 0-9 or dash are allowed)');
    const characterGroups = value.split('-');
    if (characterGroups.length !== 5)
        return error('wrong number of character groups (characters have to be organized into 5 dash-separated groups)');
    const charGroupsLengths = [8, 4, 4, 4, 12];
    const improperGroupLength = charGroupsLengths.some((length, idx) => {
        const groupLength = characterGroups[idx].length;
        return groupLength !== length;
    });
    if (improperGroupLength)
        return error('some character group is of wrong size (groups of 8, 3, 3, 3 and 12 chars long are expected)');
    return value;
};
exports.uuidChecker = uuidChecker;
