var appdatatypes = {
	 dataTypes: function(value) {
		//check for non array, null and undefined
      if ((typeof value === 'object' || typeof value === 'undefined') && !(Array.isArray(value))) {
    		  return 'no value';
  		}

  		// check for boolean
  		else if (typeof value === 'boolean') {
    		  return value;
  		}

  		//check for number
  		else if (typeof value === 'number') {
        //check for number less than 100
          if (value < 100){
            return 'less than 100';
          }
  			 //check for value greater than 100
          else if (value > 100) {
            return 'more than 100';
          }
  			//check for value equal to 100
          else if (value == 100) {
            return 'equal to 100';
          }
  		}

  		//check for string
  		else if (typeof value === 'string') {
    		  return value.length;
  		}

  		//check for array
  		else if (Array.isArray(value)) {
  			//check 3rd index
          if (typeof value[2] === 'undefined'){
  				  return undefined;
          }
  			//return 3rd index
          else{
  				  return value[2];
          }
    	}

  		//check for functions
  		else if (typeof value === 'function') {
    		  return value(true);
  		}		
	 }
}

module.exports = appdatatypes;