/**
 * Test case for round.
 * Runs with nodeunit.
 */

var round = require('../lib/round.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Round'] = function (test) {
    test.equal(round(16, 10), 20);
    test.equal(round(12, 10), 10);
    test.equal(round(10, 10), 10);
    test.equal(round(0.21, 0.1), 0.2);
    test.done();
};

