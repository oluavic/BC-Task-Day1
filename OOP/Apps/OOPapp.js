Employee = function(name, post){
   this.name = name || "Staff";
   this.post = post || "NON";
};

Employee.prototype.getSalary = function(){
   return 500*28;
};


module.exports = Employee;


 