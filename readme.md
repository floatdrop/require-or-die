# require-or-die

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]

Requires common.js modules as well as simple js files, that returns values.

## Usage

```js
var rod = require('require-or-die');

rod('./sample.js', function (err, value) {
    console.log(value);
})
```

### API

#### require(path, callback)

###### path
Type: `String`

Path to required file (will be resolved by `require.resolve`).

###### callback
Type: `Function`

Function, that will be called, when contents is read and processed. Signature pretty common: `function (err, value)`.


#### require.sync(path)

Same as `require`, but in sync way.

## License

MIT (c) 2014 Vsevolod Strukchinsky

[npm-url]: https://npmjs.org/package/require-or-die
[npm-image]: http://img.shields.io/npm/v/require-or-die.svg?style=flat

[travis-url]: http://travis-ci.org/floatdrop/require-or-die
[travis-image]: http://img.shields.io/travis/floatdrop/require-or-die.svg?branch=master&style=flat

[depstat-url]: https://david-dm.org/floatdrop/require-or-die
[depstat-image]: http://img.shields.io/david/floatdrop/require-or-die.svg?style=flat
