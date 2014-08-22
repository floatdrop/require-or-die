var run = require('vm').runInNewContext;
var fs = require('fs');

function hasKeys(obj) {
    return typeof obj === 'object' && Object.keys(obj).length !== 0;
}

module.exports = function (path, cb) {
    fs.readFile(path, function (err, content) {
        if (err) { return cb(err); }
        try {
            var sandbox = {};
            var empty = {};
            sandbox.exports = empty;
            sandbox.module = sandbox;
            sandbox.global = sandbox;

            var result = run(content, sandbox, path);

            if (hasKeys(sandbox.exports) || sandbox.exports !== empty) {
                return cb(null, sandbox.exports);
            }

            cb(null, result);
        } catch (err) {
            cb(err);
        }
    });
};
