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