
  'use strict';
  var expect = require('chai').expect;
var assert = require('chai').assert;
var Emp = require('../apps/OOPapp.js');
  describe("Employee Class: Create an Employee, make it getsalary", function() {

    it("The Employee should be a type of `object`, and an instance of the `employee` class", function() {
      var staff1 = new Emp.Employee('Staff1');
      expect(typeof staff1).to.eql(typeof {});
      expect(staff1 instanceof Emp.Employee).to.equal.true;
    });

    //it("The Employee should be called 'Staff' if no name is passed as a parameter", function() {
     // var all = new Emp.Employee();
     // expect(all.Name).to.equal('Staff');
     // expect(all.post).to.equal('NON');
    //});

    it("The Employee name and post should be a property of the Employee", function() {
      var staff2  = new Emp.Employee('Victoria', 'security');
      expect(staff2.Name).to.equal('Victoria');
      expect(staff2.post).to.equal('security');
    });

    it("The Employee shoud have a degree except it security dept", function() {
      var staff3  = new Emp.Employee('Remi', 'Admin');
      expect(staff3.getsalary).to.equal(1500);

      
      
    });

    
    

  });
