Employee = function(name, post){
   this.name = name;
   this.post = post;
};
Employee.prototype.getSalary = function(){
   return 500*28;
};

module.exports = Employee;
 