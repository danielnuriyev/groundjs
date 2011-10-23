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
