var app = {
  //actual function
  getprime: function(n) {
    //input is number
    if (typeof(n) == "number") {
      //input above 1
      if (n > 1) {
        //declare array to say output
        var arrprime = new Array();
        for(var x = 2; x <= n; x++) {
          //skip even numbers
          if (app.iseven(x) == 'No') {
            //check for prime
            if(app.isPrime(x) != 'No') {
              arrprime.push(x);
            }
          }
        }
        //return array
        return arrprime;
      }
      else if (n < 0){
        //return output for negative number
        return 'Invalid input'
      }
      //return output for les than 1
      else {
        return 'Invalid input';
      }
    }
    //return output for non number input
    else {
      return 'Invalid input';
    }
  },

  //function to get prime number
  isPrime: function(value) {
    for(var i = 2; i < value; i++) {
      if(value % i == 0) {
        return 'No';
      }
    }
    return value;
  },

  //function to get even number
  iseven: function(m) {
    if ((m % 2 == 0) && (m > 2)) {
      return 'yes';
    }
    return 'No';
  }
  
}
module.exports = app;