# is-window

> Check if the given value is a window object.

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/bubkoo/is-window/blob/master/LICENSE)


[![build:?](https://img.shields.io/travis/bubkoo/is-window/master.svg?style=flat-square)](https://travis-ci.org/bubkoo/is-window)
[![coverage:?](https://img.shields.io/coveralls/bubkoo/is-window/master.svg?style=flat-square)](https://coveralls.io/github/bubkoo/is-window)


## Install

```
$ npm install --save is-window 
```


## Usage

```js
var isWindow = require('is-window');

isWindow();               // => false
isWindow(1);              // => false
isWindow('1');            // => false
isWindow(true);           // => false
isWindow(null);           // => false
isWindow({});             // => false
isWindow(function () {}); // => false
isWindow([]);             // => false
isWindow([1, 2, 3]);      // => false
```

## Related

- [is-array-like](https://github.com/bubkoo/is-array-like) - Check if the given value is an Array or an Array like object.
