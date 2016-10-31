'use strict';

module.exports = function (obj) {

  if (obj == null) {
    return false;
  }

  return obj === Object(obj) && obj === obj.window;
};
