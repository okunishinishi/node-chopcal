/**
 * Chop to round.
 * @function round
 * @param {number} value - Value to calc.
 * @param {number} [base=1] - Base number.
 * @returns {number} - Round number.
 */
"use strict";

var surplus = require('./surplus');

/** @lends round */
function round(value, base) {
    base = base || 0;
    var surplused = surplus(value, base);
    var result = value - surplused;
    var enough = (base / 2) < surplused;
    if (enough) {
        result += base;
    }
    var weight = 1 / base;
    return parseInt(result * weight) / weight;
}

module.exports = round;
