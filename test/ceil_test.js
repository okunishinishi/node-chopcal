/**
 * Test case for ceil.
 * Runs with nodeunit.
 */

var ceil = require('../lib/ceil.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Ceil'] = function (test) {
    test.equal(ceil(12, 10), 20);
    test.equal(ceil(10, 10), 10);
    test.equal(ceil(0.21, 0.1), 0.3);
    test.done();
};

