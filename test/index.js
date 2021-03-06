/* global it */

var rod = require('..');
var assert = require('assert');
var join = require('path').join;

function fixture(name) { return join(__dirname, 'fixtures', name); }

it('should return error in callback on not found files', function () {
    rod(fixture('wtf.js'), function (err) {
        assert.ok(err);
    });
});

it('should require common.js file', function (done) {
    rod(fixture('common.js'), function (err, value) {
        assert.ifError(err);
        assert.equal(value, true);
        done();
    });
});

it('should require common.js file with new empty object', function (done) {
    rod(fixture('common.empty.js'), function (err, value) {
        assert.ifError(err);
        assert.deepEqual(value, {});
        done();
    });
});

it('should require js file', function (done) {
    rod(fixture('simple.js'), function (err, value) {
        assert.ifError(err);
        assert.equal(value, true);
        done();
    });
});

it('should require js file in sync', function () {
    var value = rod.sync(fixture('simple.js'));
    assert.equal(value, true);
});

it('should return error on exceptions', function (done) {
    rod(fixture('simple.js'), function (err) {
        assert.ok(err);
        done();
    });
});
