'use strict';

var char   = require('chai');
var expect = char.expect;


describe('is-window', function () {

  var isWindow = require('../../index');

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
  });
});
