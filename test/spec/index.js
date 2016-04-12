'use strict';

var char   = require('chai');
var expect = char.expect;


describe('is-window', function () {

    var isWindow = require('../../index');

    it('isWindow()', function () {
        expect(isWindow()).to.be.false;
    });

    it('isWindow(1)', function () {
        expect(isWindow(1)).to.be.false;
    });

    it('isWindow("1")', function () {
        expect(isWindow('1')).to.be.false;
    });

    it('isWindow(true)', function () {
        expect(isWindow(true)).to.be.false;
    });

    it('isWindow(null)', function () {
        expect(isWindow(null)).to.be.false;
    });

    it('isWindow({})', function () {
        expect(isWindow({})).to.be.false;
    });

    it('isWindow(function)', function () {
        expect(isWindow(function () {})).to.be.false;
    });

    it('isWindow([])', function () {
        expect(isWindow([])).to.be.false;
    });

    it('isWindow(arguments)', function () {
        expect(isWindow(arguments)).to.be.false;
    });
});
