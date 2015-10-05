(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window.chopcal = require("../lib/index.js");
},{"../lib/index.js":4}],2:[function(require,module,exports){
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

},{"./surplus":6}],3:[function(require,module,exports){
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

},{"./surplus":6}],4:[function(require,module,exports){
/**
 * Chop numbers.
 * @module chopcal
 */

"use strict";

module.exports = {
    get ceil() { return require('./ceil'); },
    get floor() { return require('./floor'); },
    get round() { return require('./round'); },
    get surplus() { return require('./surplus'); }
};
},{"./ceil":2,"./floor":3,"./round":5,"./surplus":6}],5:[function(require,module,exports){
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

},{"./surplus":6}],6:[function(require,module,exports){
/**
 * Get surplus.
 * @function surplus
 * @param {number} value - Value to calc.
 * @param {number} [base=1] - Base number.
 * @returns {number} - Surplus number.
 */
"use strict";

/** @lends surplus */
function surplus(value, base) {
    base = base || 0;
    return value - (parseInt(value / base) * base)
}

module.exports = surplus;

},{}]},{},[1]);
