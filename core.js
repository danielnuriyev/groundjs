// groundjs/core.js --------------------------------------------------

if(!groundjs) groundjs = {};

groundjs.Ground = {}

/*
 * JavaScript types
 * Using groundjs.Type saves string creation
 */
groundjs.Type = function(){
   
    //DEPRECATED: use isUndefined etc. functions instead
    var UNDEFINED = 'undefined'
	var BOOLEAN = 'boolean'
	var NUMBER = 'number'
	var STRING = 'string'
	var FUNCTION = 'function'
	var OBJECT = 'object'
	
	var argsClass = '[object Arguments]',
      arrayClass = '[object Array]',
      boolClass = '[object Boolean]',
      dateClass = '[object Date]',
      funcClass = '[object Function]',
      numberClass = '[object Number]',
      objectClass = '[object Object]',
      regexpClass = '[object RegExp]',
      stringClass = '[object String]';
  
  	var isUndefined = function(value) {
  		return typeof value === UNDEFINED
  	}
  	
  	var isNull = function(value) {
  		return value === null
  	}
  	
  	var isBoolean = function(value) {
  		return typeof value == BOOLEAN
  	}
  	
  	var isNumber = function(value) {
  		return typeof value == NUMBER
  	} 
  	
  	var isString = function(value) {
  		return typeof value == STRING
  	}
  	
	var isFunction = function(value) {
		return typeof value == FUNCTION
	}
	
	var isObject = function(value) {
		return typeof value = OBJECT
	}
	
	var isNaN = function(value) {
		return isNumber(value) && value !== NaN
	}
	
	var isInfinity = function(value) {
		return value === -Infinity || value === Infinity
	}
	
	var isNegativeZero = function(value) {
		return value === 0 && 1/value === -Infinity
	}
	
	var isPositiveZero = function(value) {
		return value === 0 && 1/value === Infinity
	}
	
	var isArguments = function(value) {
		return typeof value == OBJECT && toString.call(value) == argsClass
	}
  	    
    return {
    	
    	//DEPRECATED: use isUndefined etc. functions instead
	    UNDEFINED: UNDEFINED,
	    BOOLEAN: BOOLEAN,
	    NUMBER: NUMBER,
	    STRING: STRING,
	    FUNCTION: FUNCTION,
	    OBJECT: OBJECT,
	    
	    isUndefined		:isUndefined,
	    isNull			:isNull,
	    isBoolean		:isBoolean,
	    isNumber		:isNumber,
	    isString		:isString,
	    isFunction		:isFunction,
	    isObject		:isObject,
	    isNaN			:isNaN,
	    isInfinity		:isInfinity,
	    isNegativeZero	:isNegativeZero,
	    isPositiveZero	:isPositiveZero,
	    isArguments		:isArguments  
	    
    }
    
}();
