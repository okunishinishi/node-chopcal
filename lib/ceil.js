/**
 * Chop to ceil.
 * @function ceil
 * @param {number} value - Value to calc.
 * @param {number} [base=1] - Base number.
 * @returns {number} - Ceil number.
 */
"use strict";

var surplus = require('./surplus');

/** @lends ceil */
function ceil(value, base) {
    base = base || 0;
    var surplused = surplus(value, base);
    var result = value - surplused;
    var enough = 0 < surplused;
    if (enough) {
        result += base;
    }
    var weight = 1 / base;
    return parseInt(result * weight) / weight;
}

module.exports = ceil;
