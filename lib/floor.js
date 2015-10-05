/**
 * Chop to floor.
 * @function floor
 * @param {number} value - Value to calc.
 * @param {number} [base=1] - Base number.
 * @returns {number} - Floor number.
 */
"use strict";

var surplus = require('./surplus');

/** @lends floor */
function floor(value, base) {
    base = base || 0;
    var surplused = surplus(value, base);
    var result = value - surplused;
    var weight = 1 / base;
    return parseInt(result * weight) / weight;
}

module.exports = floor;
