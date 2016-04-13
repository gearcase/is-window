# is-window

> Checks if the given value is a window object.

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

- [is-nil](https://github.com/bubkoo/is-nil) - Checks if the given value is null or undefined.
- [is-null](https://github.com/bubkoo/is-null) - Checks if the given value is null.
- [is-length](https://github.com/bubkoo/is-length) - Checks if the given value is a valid array-like length.
- [is-array-like](https://github.com/bubkoo/is-array-like) - Checks if the given value is an array or an array-like object.
