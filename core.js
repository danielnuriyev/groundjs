// groundjs/core.js --------------------------------------------------

if(!groundjs) groundjs = {};

groundjs.Ground = {}

/*
 * JavaScript types
 * Using groundjs.Type saves string creation
 */
groundjs.Type = function(){
   
    var UNDEFINED = 'undefined'
	var BOOLEAN = 'boolean'
	var NUMBER = 'number'
	var STRING = 'string'
	var FUNCTION = 'function'
	var OBJECT = 'object'
	var XML = 'xml'
	    
    var argsClass = '[object Arguments]',
      arrayClass = '[object Array]',
      boolClass = '[object Boolean]',
      dateClass = '[object Date]',
      funcClass = '[object Function]',
      numberClass = '[object Number]',
      objectClass = '[object Object]',
      regexpClass = '[object RegExp]',
      stringClass = '[object String]';
   
    var isArguments = function(value) {
      return value && 
      			typeof value == OBJECT && 
      			typeof value.length == NUMBER &&
        		toString.call(value) == argsClass || false
    }
    
    var isArray = function(value){
        return value && 
        		typeof value == OBJECT && 
        		typeof value.length == NUMBER &&
        		toString.call(value) == arrayClass || false;        
    }
    
    var isBoolean = function(value) {
      return value === true || value === false ||
        value && typeof value == OBJECT && toString.call(value) == boolClass || false;
    }
    
    var isDate = function(value) {
      return value && typeof value == OBJECT' && toString.call(value) == dateClass || false;
    }
    
    //TO BE CONTINUED
    
    return {
	    UNDEFINED: UNDEFINED,
	    BOOLEAN: BOOLEAN,
	    NUMBER: NUMBER,
	    STRING: STRING,
	    FUNCTION: FUNCTION,
	    OBJECT: OBJECT,
	    XML: XML,
	    
	    isArguments: isArguments,
	    isArray:     isArray,
	    isBoolean:   isBoolean
    }
    
}();
