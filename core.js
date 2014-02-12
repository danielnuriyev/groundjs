// groundjs/core.js --------------------------------------------------

if(typeof groundjs === 'undefined') throw 'Requires groundjs/util.js';

groundjs.Ground = {}

/*
 * JavaScript types
 * Using groundjs.Type saves string creation
 */
groundjs.Type = {
    UNDEFINED: 'undefined',
    BOOLEAN: 'boolean',
    NUMBER: 'number',
    STRING: 'string',
    OBJECT: 'object',
    FUNCTION: 'function',
    
    isArray: function(obj){
        if(typeof obj === UNDEFINED || obj == null){
            return false;
        }
        return typeof obj.length !== UNDEFINED;        
    }
    
}

groundjs.type = function(item) {
      var getPrototype = function(item) {
        return Object.prototype.toString.call(item).slice(8, -1);
      };
      var kind, Undefined;
      if (item === null ) {
        kind = 'null';
      } else {
        if ( item === Undefined ) {
          kind = 'undefined';
        } else {
          var prototype = getPrototype(item);
          if ( ( prototype === 'Number' ) && isNaN(item) ) {
            kind = 'NaN';
          } else {
            kind = prototype;
          }
        }
      }
      return kind;
    }
