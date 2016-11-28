'use strict';
var expect = require('chai').expect;
var appdatatypes = require('../apps/DTapp.js');
  //test for null
  describe("Case for some falsy values", function() {

    it("should return 'no value' for null", function() {
      expect(appdatatypes.dataTypes(null)).to.equal('no value');
    });

    it("should return 'no value' for undefined", function() {
      expect(appdatatypes.dataTypes(undefined)).to.equal('no value');
    });

  });
  //test for booleans
  describe("Case for booleans", function() {

    it("should return true for `true`", function() {
      expect(appdatatypes.dataTypes(true)).to.be.true;
    });

    it("should return false for `false`", function() {
      expect(appdatatypes.dataTypes(false)).to.be.false;
    });

  });
  //test for numbers
  describe("Case for Numbers", function() {

    it("should return 'less than 100' for 44", function() {
      expect(appdatatypes.dataTypes(44)).to.equal('less than 100');
    });

    it("should return 'more than 100' for 144", function() {
      expect(appdatatypes.dataTypes(144)).to.equal('more than 100');
    });

    it("should return 'equal to 100' for 100", function() {
      expect(appdatatypes.dataTypes(100)).to.equal('equal to 100');
    });
  });
  //test for string
  describe("Case for string", function() {

    it("should return 0 for empty", function() {
      expect(appdatatypes.dataTypes('')).to.equal(0);
    });

    it("should return 5 for 'Hello'", function() {
      expect(appdatatypes.dataTypes('Hello')).to.equal(5);
    });

  });
  //test for arrays
  describe("Case for array", function() {

    it("should return undefined for 3rd index", function() {
      expect(appdatatypes.dataTypes([5,6])).to.equal.undefined;
    });

    it("should return 5 for 3rd index", function() {
      expect(appdatatypes.dataTypes([1,2,5])).to.equal(5);
    });

  });
  //test for functions
  describe("Case for functions", function() {

    it("should return true for 'function(){return 'Hello Bodunde Adebiyi'}'", function() {
      expect(appdatatypes.dataTypes(function(){return 'Hello Bodunde Adebiyi'})).to.equal.true;
    });

    it("should return 'Hello Bodunde Adebiyi' for 'function(){return 'Hello Victoria'}'", function() {
      expect(appdatatypes.dataTypes(function(){return 'Hello Bodunde Adebiyi'})).to.equal('Hello Bodunde Adebiyi');
    });

  });
