'use strict';

var expect = require('chai').expect;

describe('is-window', function () {

  var isWindow = require('../../');

  it('common test', function () {

    expect(isWindow()).to.be.false;

    expect(isWindow(1)).to.be.false;

    expect(isWindow('1')).to.be.false;

    expect(isWindow(true)).to.be.false;

    expect(isWindow(null)).to.be.false;

    expect(isWindow({})).to.be.false;

    expect(isWindow(function () {})).to.be.false;

    expect(isWindow([])).to.be.false;

    expect(isWindow(arguments)).to.be.false;

    // var windowWannabe    = {};
    // windowWannabe.window = windowWannabe;
    // expect(isWindow(windowWannabe)).to.be.false;
  });
});
