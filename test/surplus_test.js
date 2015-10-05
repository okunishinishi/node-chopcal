/**
 * Test case for surplus.
 * Runs with nodeunit.
 */

var surplus = require('../lib/surplus.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Surplus'] = function (test) {
    test.equal(surplus(12, 10), 2);
    test.equal(surplus(0.23, 0.1), 0.03);
    test.done();
};

