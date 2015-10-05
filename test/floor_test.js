/**
 * Test case for floor.
 * Runs with nodeunit.
 */

var floor = require('../lib/floor.js');

exports.setUp = function(done) {
    done();
};

exports.tearDown = function(done) {
    done();
};

exports['Floor'] = function(test){
    test.equal(floor(12, 10), 10);
    test.equal(floor(10, 10), 10);
    test.equal(floor(0.21, 0.1), 0.2);
    test.done();
};

