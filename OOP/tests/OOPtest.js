
  'use strict';
  var expect = require('chai').expect;
  var assert = require('chai').assert;
  var Employee = require('../apps/OOPapp.js');
  describe("Employee Class: Create an Employee, make it getsalary", function() {

    it("The Employee should be a type of `object`, and an instance of the `employee` class", function() {
      var staff1 = new Employee('Staff1');
      expect(typeof staff1).to.eql(typeof {});
      expect(staff1 instanceof Employee).to.equal.true;
    });
    it("The Employee should be called 'Staff' if no name is passed as a parameter", function() {
      var gm = new Employee();
      expect(gm.name).to.equal('Staff');
      expect(gm.post).to.equal('NON');
    });
    

    it("The Employee name and post should be a property of the Employee", function() {
      var staff2  = new Employee('Victoria', 'security');
      expect(staff2.name).to.equal('Victoria');
      expect(staff2.post).to.equal('security');
    });

    it("The Employee shoud have a degree except it security dept", function() {
      var staff3  = new Employee('Remi', 'Admin');
      expect(staff3.getSalary()).to.equal(14000); 
    });

    //it("The Driver should be a type of `object`, and an instance of the `Driver` class", function() {
    //  var driver1 = new Driver('driver1','fleet','Camry');
     // expect(typeof driver1).to.eql(typeof {});
     // expect(driver1 instanceof Driver).to.equal.true;
   // });
    
    

  });
