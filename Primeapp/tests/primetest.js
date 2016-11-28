'use strict';
var expect = require('chai').expect;
var assert = require('chai').assert;
var primefile = require('../apps/primeapp.js');
//test for prime function
describe('Input file exist', function() {
  //check file exist
  it('should exist', function() {
        expect(primefile).to.not.be.undefined;
  });
  //check correct input
  it("should Invalid input for non integer ", function() {
    assert(primefile.getprime('helo') == 'Invalid input');
  })  
  //check for positive input
  it("should return Invalid input for negative input", function() {
    assert(primefile.getprime(-2)==('Invalid input'));
  })
  //check result for 4
  it("should return [2,3] for 4 ", function() {
    assert.sameMembers(primefile.getprime(4), [ 2, 3 ], 'same members');
  })
  //check result for 10
  it("should return [2,3,5,7] for 10", function() {
    assert.sameMembers(primefile.getprime(10), [ 2, 3, 5, 7 ], 'same members');
  })
  //check result for 20
  it("should return [ 2, 3, 5, 7, 11, 13, 17, 19 ] for 20", function() {
    assert.sameMembers(primefile.getprime(20), [ 2, 3, 5, 7, 11, 13, 17, 19 ], 'same members');
  })
  
  
  
});