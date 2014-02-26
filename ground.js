// groundjs/prototype.js --------------------------------------

// Boolean ----------------------------------------------------

if(typeof Boolean.isBoolean === 'undefined') {
	Boolean.isBoolean = function(value) {
		return typeof value == 'boolean' || toString.call(value) == '[object Boolean]'
	}
}

// Number -----------------------------------------------------

if(typeof Number.isNumber === 'undefined') {
	Number.isNumber = function(value) {
		return typeof value == 'number' || toString.call(value) == '[object Number]'
	}
}

if(typeof Number.isNaN === 'undefined') {
	Number.isNaN = function(value) {
		var isNumber  = typeof value == 'number' || toString.call(value) == '[object Number]'
		return isNumber && value != +value
	}
}

if(typeof Number.isInfinity === 'undefined') {
	Number.isInfinity = function(value) {
		return value === -Infinity || value === Infinity
	}
}
	
if(typeof Number.isNegativeZero === 'undefined') {
	Number.isNegativeZero = function(value) {
		return value === 0 && 1/value === -Infinity
	}
}

if(typeof Number.isPositiveZero === 'undefined') {	
	Number.isPositiveZero = function(value) {
		return value === 0 && 1/value === Infinity
	}
}

// String -----------------------------------------------------

if(typeof String.isString === 'undefined') {
	String.isString = function(value) {
  		return typeof value == 'string' || toString.call(value) == '[object String]' 
  	}
}

if(typeof String.empty === 'undefined'){String.empty = '';}
if(typeof String.dot === 'undefined'){String.dot = '.';}
if(typeof String.period === 'undefined'){String.period = '.';}
if(typeof String.underscore === 'undefined'){String.underscore = '_';}
if(typeof String.colon === 'undefined'){String.colon = ':';}
if(typeof String.semicolon === 'undefined'){String.semicolon = ';';}
if(typeof String.comma === 'undefined'){String.comma = ',';}
if(typeof String.question === 'undefined'){String.question = '?';}
if(typeof String.equal === 'undefined'){String.equal = '=';}
if(typeof String.dash === 'undefined'){String.dash = '-';}
if(typeof String.hyphen === 'undefined'){String.hyphen = '-';}
if(typeof String.minus === 'undefined'){String.minus = '-';}
if(typeof String.slash === 'undefined'){String.slash = '/';}
if(typeof String.divide === 'undefined'){String.divide = '/';}
if(typeof String.plus === 'undefined'){String.plus = '+';}
if(typeof String.multiply === 'undefined'){String.multiply = '*';}
if(typeof String.asterisk === 'undefined'){String.asterisk = '*';}
if(typeof String.pipe === 'undefined'){String.pipe = '|';}
if(typeof String.pound === 'undefined'){String.pound = '#';}
if(typeof String.hash === 'undefined'){String.hash = '#';}
if(typeof String.dollar === 'undefined'){String.dollar = '$';}
if(typeof String.ampersand === 'undefined'){String.ampersand = '&';}
if(typeof String.percent === 'undefined'){String.percent = '%';}
if(typeof String.circumflex === 'undefined'){String.circumflex = '^';}
if(typeof String.exclamation === 'undefined'){String.exclamation = '!';}
if(typeof String.at === 'undefined'){String.at = '@';}
if(typeof String.ellipsis === 'undefined'){String.ellipsis = '...';}
if(typeof String.singleQuote === 'undefined'){String.singleQuote = "'";}
if(typeof String.doubleQuote === 'undefined'){String.doubleQuote = '"';}
if(typeof String.leftBracket === 'undefined'){String.leftBracket = '(';}
if(typeof String.rightBracket === 'undefined'){String.rightBracket = ')';}

if(typeof String.leftAngleBracket === 'undefined'){String.leftAngleBracket = '<';}
if(typeof String.rightAngleBracket === 'undefined'){String.rightAngleBracket = '>';}
if(typeof String.less === 'undefined'){String.less = '<';}
if(typeof String.greater === 'undefined'){String.greater = '>';}

if(typeof String.leftSquareBracket === 'undefined'){String.leftSquareBracket = '[';}
if(typeof String.rightSquareBracket === 'undefined'){String.rightSquareBracket = ']';}

if(typeof String.leftCurlyBracket === 'undefined'){String.leftCurlyBracket = '{';}
if(typeof String.rightCurlyBracket === 'undefined'){String.rightCurlyBracket = '}';}

if(typeof String.greaterEqual === 'undefined'){String.greaterEqual = '>=';}
if(typeof String.lessEqual === 'undefined'){String.lessEqual = '<=';}

if(typeof String.space === 'undefined'){String.space = ' ';}
if(typeof String.newLine === 'undefined'){String.newLine = '\n';}
if(typeof String.carriageReturn === 'undefined'){String.carriageReturn = '\r';}
if(typeof String.tab === 'undefined'){String.tab = '\t';}

if(typeof String.trim === 'undefined'){
    String.prototype.trim = function(){
        return this.replace(/^\s+|\s+$/g, '');
    };
};

if(typeof String.startsWith === 'undefined'){
    String.prototype.startsWith = function(s){
        if(s == null) return false;
        if(typeof s == 'string' || toString.call(s) == '[object String]'){
            s = s.toString();
        }
        return this.indexOf(s) == 0;
    };
};

if(typeof String.endsWith === 'undefined'){
    String.prototype.endsWith = function(s){
        if(s == null) return false;
        if(typeof s == 'string' || toString.call(s) == '[object String]'){
            s = s.toString();
        }
        return this.lastIndexOf(s) + s.length == this.length;
    };
};

/**
 * Pads a string with the specified character up to the specitied length on left or right
 * @param s string to pad
 * @param pad string used for padding
 * @param max maximum length of the resulting string
 * @side 'left' to pad on the left (default), 'right' to pad on the right
 * @return padded string
 */
if(typeof String.pad === 'undefined'){
    String.prototype.pad = function(s, pad, max, side){
        if(side == null){
            side = 'left';
        } 
        if(side != 'left' && side != 'right'){
            throw 'side must equal "left" or "right"'
        }
        if(typeof s == 'string' || toString.call(s) == '[object String]'){
            s = s.toString();
        }
        if(typeof pad == 'string' || toString.call(pad) == '[object String]'){
            pad = pad.toString();
        }
        if(!(typeof max == 'number' || toString.call(max) == '[object Number]') || max < s.length()){
            throw 'max must be a number';
        }
        if(max < s.length()){
            return s;
        }
        var charsToPad = max - s.length();
        var result = s;
        if(side == 'left'){
            while(result.length() < max){
                result = pad + result;
            }
            if(result.length() > max){
                var start = result.length() - max;
                result = result.substring(start, result.length());
            }
        } else if(side == 'right'){
            while(result.length() < max){
                result = result + pad;
            }
            if(result.length() > max){
                result = result.substring(0, max);
            }
        }
        return result;
    };
};

if(typeof String.first === 'undefined'){
    String.prototype.first = function(){
        return this.length() == 0 ? '' : this.charAt(0);
    }
}

if(typeof String.last === 'undefined'){
    String.prototype.last = function(){
        return this.length() == 0 ? '' : this.charAt(this.length() - 1);
    }
}

// Function ---------------------------------------------------

if(typeof Function.isFunction === 'undefined') {
	Function.isFunction = function(value) {
		return typeof value == 'function'
	}
}

// Object -----------------------------------------------------

if(typeof Object.isObject === 'undefined') {
	Object.isObject = function(value) {
		return typeof value == 'object'
	}
}

// Array ------------------------------------------------------

if(typeof Array.isArray === 'undefined') {
	Array.isArray = function(value) {
		return toString.call(value) == '[object Array]'
	}
}

/**
 * The array must be sorted
 */
Array.prototype.binarySearch = function(find, comparator) {
  var low = 0, high = this.length - 1, i, comparison, div = 2;
  while (low <= high) {
    i = Math.floor((low + high) / div);
    comparison = comparator(this[i], find);
    if (comparison < 0) {low = i + 1;continue;};
    if (comparison > 0) {high = i - 1;continue;};
    return i;
  }
  return null;
};

// Date -------------------------------------------------------

if(typeof Date.isDate === 'undefined') {
	Date.isDate = function(value) {

		var _isNumber = function(value) {
			return typeof value == 'number' || toString.call(value) == '[object Number]'
		}
	
		var _isNaN = function(value) {
			return _isNumber(value) && value != +value
		}
	
		return toString.call(value) == '[object Date]' || !isNaN( Date.parse(value) ) 
	}
}
	
	
// RegExp -----------------------------------------------------
	
if(typeof RegExp.isRegExp === 'undefined') {	
	RegExp.isRegExp = function(value) {
      return toString.call(value) == '[object RegExp]'
    }
}

groundjs = {};
// groundjs/core.js --------------------------------------------------

if(typeof groundjs === 'undefined') groundjs = {};

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
      booleanClass = '[object Boolean]',
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
  		return typeof value == BOOLEAN || toString.call(value) == booleanClass
  	}
  	
  	var isNumber = function(value) {
  		return typeof value == NUMBER || toString.call(value) == numberClass
  	} 
  	
  	var isString = function(value) {
  		return typeof value == STRING || toString.call(value) == stringClass 
  	}
  	
	var isFunction = function(value) {
		return typeof value == FUNCTION
	}
	
	var isObject = function(value) {
		return typeof value = OBJECT
	}
	
	var isNaN = function(value) {
		if(isUndefined(Number.isNumber)) {
			return isNumber(value) && value != +value
		} else {
			return Number.isNaN(value)
		}
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
	
	var isArray = function(value) {
		return toString.call(value) == arrayClass
	}
	
	var isDate = function(value) {
		return toString.call(value) == dateClass || !isNaN(Date.parse(value))
	}
	
	var isRegExp = function(value) {
      return toString.call(value) == regexpClass
    }
    
    var isArguments = function(value) {
		return toString.call(value) == argsClass
	}
  	    
    return {
    	
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
	    isArray			:isArray,
	    isDate			:isDate,
	    isRegExp		:isRegExp,
	    isArguments		:isArguments  
	    
    }
    
}();
// groundjs/util.js --------

if(typeof groundjs === 'undefined') throw 'Requires groundjs/core.js';

groundjs.Util = {} //only for verifying that this module is loaded in other modules

groundjs.StringUtil = function(){

    var g = groundjs;

    var isEmpty = function(s){
    	return g.Type.isUndefined(s) || g.Type.isNull(s) || g.StringUtil.trim(s).length == 0;
    }
    var trim = function(s){
        return s.replace(/^\s+|\s+$/g, '');
    }
    var startsWith = function(a,b){
        if(a == null || b == null) return false;
        if(!g.Type.isString(a)){
            a = a.toString();
        }
        if(!g.Type.isString(b)){
            b = b.toString();
        }
        return a.indexOf(b) == 0;
    }
    var endsWith = function(a,b){
        if(a == null || b == null) return false;
        if(!g.Type.isString(a)){
            a = a.toString();
        }
        if(!g.Type.isString(b)){
            b = b.toString();
        }
        return a.lastIndexOf(b) + b.length == a.length;
    }

    /**
     * Pads a string with the specified character up to the specitied length on left or right
     * @param s string to pad
     * @param pad string used for padding
     * @param max maximum length of the resulting string
     * @side 'left' to pad on the left (default), 'right' to pad on the right
     * @return padded string
     */
    var pad = function(s, pad, max, side){
        if(side == null){
            side = 'left';
        } 
        if(side != 'left' && side != 'right'){
            throw 'side must equal "left" or "right"'
        }
        if(!g.Type.isString(s)){
            s = s.toString();
        }
        if(!g.Type.isString(pad)){
            pad = pad.toString();
        }
        if(!g.Type.isNumber(max) || max < s.length()){
            throw 'max must be a number';
        }
        if(max < s.length()){
            return s;
        }
        var charsToPad = max - s.length();
        var result = s;
        if(side == 'left'){
            while(result.length() < max){
                result = pad + result;
            }
            if(result.length() > max){
                var start = result.length() - max;
                result = result.substring(start, result.length());
            }
        } else if(side == 'right'){
            while(result.length() < max){
                result = result + pad;
            }
            if(result.length() > max){
                result = result.substring(0, max);
            }
        }
        return result;
    }
    var insert = function(s,index,stringToInsert){
        if(g.Type.isUndefined(s) || g.Type.isNull(s)){
            return s;
        } else if(!g.Type.isString(s)){
            s = s.toString();
        }
        
        if(!g.Type.isNumber(index)){
            throw 'index must be a number';
        }
        
        if(index < 0 || index > s.length){
            throw 'index must be between 0 and ' + s.length;
        }
        
        if(g.Type.isUndefined(stringToInsert) || g.Type.isNull(stringToInsert)){
            return s;
        }
        
        if(index === 0){
            return stringToInsert + s;
        } else if(index === s.length){
            return s + stringToInsert;
        } else {
            return s.substring(0,index) + stringToInsert + s.substring(index, s.length);
        }
        
    }
    
    var first = function(s){
        if(g.Type.isUndefined(s) || g.Type.isNull(s)){
            return s;
        }
        if(!g.Type.isString(s)){
            s = s.toString();
        }
        if(s.length() == 0){
            return s;
        }
        return s.charAt(0);
    }
    
    var last = function(s){
        if(g.Type.isUndefined(s) || g.Type.isNull(g)){
            return s;
        }
        if(!g.Type.isString(s)){
            s = s.toString();
        }
        if(s.length() == 0){
            return s;
        }
        return s.charAt(s.length() - 1);
    }
    
    var eval = function(s){
        if(!s){
            return s;
        }
        
        //while(true){
            
            var start = s.indexOf('{');
            //if(start == -1) break;

            var end = s.indexOf('}',start);
            //if(end == -1) break;

            var exp = s.substring(start + 1, end);
            
            try{
                eval('var v = ' + exp);
            } catch(e){console.log(e)}
        //}
        
        return s;
        
    }
    
    return {
        endsWith: endsWith,
        eval: eval,
        first: first,
        insert: insert,
        isEmpty: isEmpty,
        last: last,
        pad: pad,
        startsWith: startsWith,
        trim: trim
    }
    
}();

groundjs.ArrayUtil = function(){

	var g = groundjs;
	
	var isEmpty = function(a){
		if(g.Type.isUndefined(a) || g.Type.isNull(a) || a.length == 0){
			return true;
		}
		for(var i = 0; i < a.length; i++){
			var e = a[i];
			if(!g.Type.isUndefined(a) && !g.Type.isNull(a)) return false;
		}
		return true;
	}
		
    /**
     * The array must be sorted
     */
    var binarySearch = function(find, comparator) {
        var low = 0, high = this.length - 1, i, comparison, div = 2;
        while (low <= high) {
            i = Math.floor((low + high) / div);
            comparison = comparator(this[i], find);
            if (comparison < 0) {low = i + 1;continue;};
            if (comparison > 0) {high = i - 1;continue;};
            return i;
        }
        return null;
    }
	return{
		isArray: g.isArray,
		isEmpty: isEmpty,
		binarySearch: binarySearch
	}
}();
// groundjs/numUtil.js -----------------------------------------------

if(typeof groundjs === 'undefined') throw 'Requires groundjs/core.js';

groundjs.NumUtil = function(){

	var g = groundjs
	
    var getRandomNumber = function(start,end){
        var s = Number.MIN_VALUE;
        var e = Number.MAX_VALUE;
        if(start != null){
            if(g.Type.isNumber(start)){
                s = start;
            } else {
                throw 'start is not a number';
            }
        }
        if(end != null){
            if(g.Type.isNumber(end)){
                e = end;
            } else {
                throw 'end is not a number';
            }
        }
        if(s == e){
            return s;
        } else if(s > e){
            throw 'start is greater than end';
        } else {
            var range = e - s;
            return s + range * Math.random();
        }
    }
    
    var getRandomArrayElement = function(obj){
        if(obj.length){
            return obj[Math.floor(Math.random() * obj.length)];
        } else {
            throw 'Not an array';
        }
    }
    
    var isNumber = function(obj){
    	return g.Type.isNumber(obj)
    }
    
    return {
    	getRandomNumber			:getRandomNumber,
    	getRandomArrayElement	:getRandomArrayElement
    }
    
}();
// groundjs/time.js --------------------------------------------------

if(typeof groundjs.Ground === 'undefined') throw 'Requires groundjs/core.js';

groundjs.TimeUnit = {
    milliseconds: 'milliseconds',
    seconds: 'seconds',
    minutes: 'minutes',
    hours: 'hours',
    days: 'days',
    weeks: 'weeks',
    months: 'months',
    years: 'years',
    centuries: 'centuries',
    millenia: 'millenia',
    
    get: function(s){
        if(s == groundjs.TimeUnit.milliseconds) return groundjs.TimeUnit.milliseconds;
        else if(s == groundjs.TimeUnit.seconds) return groundjs.TimeUnit.seconds;
        else if(s == groundjs.TimeUnit.minutes) return groundjs.TimeUnit.minutes;
        else if(s == groundjs.TimeUnit.hours) return groundjs.TimeUnit.hours;
        else if(s == groundjs.TimeUnit.days) return groundjs.TimeUnit.days;
        else if(s == groundjs.TimeUnit.weeks) return groundjs.TimeUnit.weeks;
        else if(s == groundjs.TimeUnit.months) return groundjs.TimeUnit.months;
        else if(s == groundjs.TimeUnit.years) return groundjs.TimeUnit.years;
        else if(s == groundjs.TimeUnit.centuries) return groundjs.TimeUnit.centuries;
        else if(s == groundjs.TimeUnit.millenia) return groundjs.TimeUnit.millenia;
        else return null;
    }
    
}

groundjs.TimeUtil = function(){

	var g = groundjs

    /**
     * Parses a string such as '1 minute', '2 hours' etc. 
     * and returns this timespan in milliseconds.
     * Supports: minutes, hours, days, weeks, months, years.
     * 
     * TODO: centuries, millenia
     */
    var parseTimeSpan = function(t){
        
        if(t == null) return null;
        if(!g.Type.isString(t)) throw 'Invalid argument'
        
        var re = new RegExp('[0-9]+');
        var match = re.exec(t);
        var v = 1;
        if(match && match.length > 0){
            v = match[0];
        }

        if(t.indexOf('second') > -1){
            return v * 1000;
        } else if(t.indexOf('minute') > -1){
            return v * 60 * 1000;
        } else if(t.indexOf('hour') > -1){
            return v * 60 * 60 * 1000;
        } else if(t.indexOf('day') > -1){
            return v * 24 * 60 * 60 * 1000;
        } else if(t.indexOf('week') > -1){
            return v * 7 * 24 * 60 * 60 * 1000;
        } else if(t.indexOf('month') > -1){
            var a = new Date();
            var b = new Date();
            b.setMonth(b.getMonth() - v);
            return a.getTime() - b.getTime();
        } else if(t.indexOf('year') > -1){
            var a = new Date();
            var b = new Date();
            b.setFullYear(b.getFullYear() - v);
            return a.getTime() - b.getTime();
        } else return null;
    }
    
    var getTimePoint = function(t){
    	
        if(t == 'now'){
            return new Date().getTime()
        } else if(t.indexOf('minute') > -1
            || t.indexOf('hour') > -1
            || t.indexOf('day') > -1
            || t.indexOf('week') > -1
            || t.indexOf('month') > -1
            || t.indexOf('year') > -1)
        {
            var span = groundjs.TimeUtil.parseTimeSpan(t);
            if(span) return new Date().getTime() - span;
            
            try{
                return Date.parse(t)
            }catch(e){
                error('Date format must be: 10 Jan 2011 00:00:00')
            }
            
        } else {
            try{
                return Date.parse(t)
            }catch(e){
                error('Date format must be: 10 Jan 2011 00:00:00')
            }
        }
    }
    
    return {
    	parseTimeSpan	:parseTimeSpan,
    	getTimePoint	:getTimePoint
    }
    
}();
if(typeof groundjs === 'undefined') throw 'Requires groundjs/core.js';

groundjs.event = function(){
	
	var g = groundjs
	
	var listeners = {}
		
	var subscribe = function(eventType, func){
		
		if(!g.Type.isFunction(func)) throw "event listener must be a function";
		
		if(!listeners[eventType]){
			listeners[eventType] = new Array();
		}
		
		for(var i = 0; i < listeners[eventType].length; i++){
			if(listeners[eventType][i] === func) return;
		}
		
		listeners[eventType].push(func);
	}
	
	var unsubscribe = function(eventType, func){
		
		if(listeners[eventType]){
		
			if(func){
			
				for(var i = 0; i < listeners[eventType].length; i++){
					if(listeners[eventType][i] === func){
						listeners[eventType].splice(i,1);
						break;
					}
				}
				
				if(listeners[eventType].length == 0) delete listeners[eventType];
			
			} else {
				delete listeners[eventType];
			}
		
		}
	}
	
	var fire = function(eventType, data){
		if(listeners[eventType]){
			for(var i = 0; i < listeners[eventType].length; i++){
				listeners[eventType][i](data);
			}
		}
	}
	
	return {
		subscribe:subscribe,
		unsubscribe:unsubscribe,
		fire:fire
		}
	
}();
// groundjs/url.js ---------------------------------------------------

if(typeof groundjs === 'undefined') throw 'Requires groundjs/core.js';
if(typeof groundjs.Util === 'undefined') throw 'Requires groundjs/util.js';

groundjs.URL = function(){ 
    var g = groundjs;
    var parse = function(url){
		var re = /^([^:]*:\/\/)?([^:]*:[^@]*@)?([^\/:\?]*\.?[^\/:\?]*)?(:[^\/]*)?(\/[^?#]*)?(\?[^#]*)?(#.*)?$/i;
		var m = url.match(re);
		
		var obj = {};
		obj.protocol = ((m[1])?m[1]:'http://').split('://')[0];
		obj.user = (m[2])?m[2].split(':')[0]:undefined;
		obj.password = (m[2])?m[2].split(':')[1].split('@')[0]:undefined;
		obj.host = (m[3])?m[3]:location.host;
		obj.hostname = obj.host;
		obj.port = (m[4])?((isNaN(parseInt(m[4].split(':')[1])))?80:parseInt(m[4].split(':')[1])):80;
		obj.path = (m[5])?m[5]:'/';
		obj.pathname = obj.path;
		obj.search = m[6] ? m[6].split('?')[1] : undefined;
		obj.query = obj.search;
		obj.fragment = (m[7])?m[7].split('#')[1]:undefined;
		obj.hash = obj.fragment;
		obj.href = ''
			+ obj.protocol + '://'
			+ ((obj.user)?obj.user+':'+obj.password+'@':'')
			+ obj.host
			+ ((obj.port != 80)?':'+obj.port:'')
			+ obj.path
			+ ((obj.search)?'?'+obj.search:'')
			+ ((obj.fragment)?'#'+obj.fragment:'');
                
       return obj;    
                   
    }
    var format = function(url){
    	return ''
			+ url.protocol + '://'
			+ ((url.user)?url.user+':'+url.password+'@':'')
			+ url.host
			+ ((url.port != 80)?':'+url.port:'')
			+ url.path
			+ ((url.search)?'?'+url.search:'')
			+ ((url.fragment)?'#'+url.fragment:'');
    }
    var isLocal = function(url){
        var re = /^(?:about|app|app\-storage|.+\-extension|file|widget):$/;
        url = g.URL.parse(url);
        return re.test(url.protocol);
    }
    /**
     * converts a map to & separated string
     */
    var toParameters = function(obj){
        
        if(obj == null) return '';
        
        var s = '';
        for(var name in obj){
            if(s.length > 0){
                s += '&';
            }
            s += encodeURIComponent(name) + '=' + encodeURIComponent(obj[name]);
        }
        return s;
    }
    /**
     * @Deprecated use append
     */
    var appendParameters = function(url, parameters){
        if(parameters == null){
            return url;
        }
        url = g.StringUtil.trim(url);
        if(parameters.length == 0){
            return url;
        }
        
        if(url.indexOf('?') == -1){
            url += '?';
        } else {
            url += '&';
        }
        
        if(g.Type.isString(parameters)){
            url += parameters;
        } else {
            url += g.URL.toParameters(parameters);
        }
        return url;
    }
    var append = function(url, tail){
        if(tail == null){
            return url;
        }
        url = g.StringUtil.trim(url);
        tail = g.StringUtil.trim(tail);
        if(tail.length == 0){
            return g.URL.format(url);
        }
        
        _url = g.URL.parse(url);
        
        if(_url.fragment){
        	return url;
        } else if(_url.search){
        	//TODO:
        	/*
        	if(tail.indexOf('/') == 0){
        	} else if(tail.indexOf('?') == 0){
        	} else if(tail.indexOf('#') == 0){
        	} else if(tail.indexOf('=') > -1){
        	} else {
        	}
        	*/
       		_url.search += '&' + tail;
       		return g.URL.format(_url);
        } else if(_url.path){        	
        	var i = tail.indexOf('/');
        	if(i > -1){
        		var tmp = g.StringUtil.endsWith(_url.path, '/') ? _url.path.substring(0, _url.path.length - 1) : _url.path;
           		tmp += g.StringUtil.startsWith(tail, '/') ? tail : '/' + tail; 
           		_url.path = tmp;
        	} else {
        		//TODO: what does tail start with
        		var tmp = g.StringUtil.endsWith(_url.path, '?') ? _url.path.substring(0, _url.path.length - 1) : _url.path;
           		tmp += g.StringUtil.startsWith(tail, '?') ? tail : '?' + tail; 
           		_url.path = tmp;
        	}
        	return g.URL.format(_url);
        } else {
        	//TODO: if starts with /
        	return url + '?' + tail;
        }
    }
    return {
        parse:parse,
        format:format,
        isLocal:isLocal,
        toParameters:toParameters,
        appendParameters:appendParameters,
        append:append
    }
    
}();
// groundjs/color.js -------------------------------------------------

groundjs.Color = {
    
    random: function(){
        var color = String.pound;
        var max = 7;
        var digits = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
        var count = digits.length;
        while(color.length < max){
            color += digits[Math.floor(Math.random() * count)];
        }
        return color;
    },
    
    AliceBlue: '#F0F8FF',
    AntiqueWhite: '#FAEBD7',
    Aqua: '#00FFFF',
    Aquamarine: '#7FFFD4',
    Azure: '#F0FFFF',
    Beige: '#F5F5DC',
    Bisque: '#FFE4C4',
    Black: '#000000',
    BlanchedAlmond: '#FFEBCD',
    Blue: '#0000FF',
    BlueViolet: '#8A2BE2',
    Brown: '#A52A2A',
    BurlyWood: '#DEB887',
    CadetBlue: '#5F9EA0',
    Chartreuse: '7FFF00',
    Chocolate: '#D2691E',
    Coral: '#FF7F50',
    CornflowerBlue: '#6495ED',
    Cornsilk: '#FFF8DC',
    Crimson: '#DC143C',
    Cyan: '#00FFFF',
    DarkBlue: '#00008B',
    DarkCyan: '#008B8B',
    DarkGoldenRod: '#B8860B',
    DarkGray: '#A9A9A9',
    DarkGrey: '#A9A9A9',
    DarkGreen: '#006400',
    DarkKhaki: '#BDB76B',
    DarkMagenta: '#8B008B',
    DarkOliveGreen: '#556B2F',
    Darkorange: '#FF8C00',
    DarkOrchid: '#9932CC',
    DarkRed: '#8B0000',
    DarkSalmon: '#E9967A',
    DarkSeaGreen: '#8FBC8F',
    DarkSlateBlue: '#483D8B',
    DarkSlateGray: '#2F4F4F',
    DarkSlateGrey: '#2F4F4F',
    DarkTurquoise: '#00CED1',
    DarkViolet: '#9400D3',
    DeepPink: '#FF1493',
    DeepSkyBlue: '#00BFFF',
    DimGray: '#696969',
    DimGrey: '#696969',
    DodgerBlue: '#1E90FF',
    FireBrick: '#B22222',
    FloralWhite: '#FFFAF0',
    ForestGreen: '#228B22',
    Fuchsia: '#FF00FF',
    Gainsboro: '#DCDCDC',
    GhostWhite: '#F8F8FF',
    Gold: '#FFD700',
    GoldenRod: '#DAA520',
    Gray: '#808080',
    Grey: '#808080',
    Green: '#008000',
    GreenYellow: '#ADFF2F',
    HoneyDew: '#F0FFF0',
    HotPink: '#FF69B4',
    IndianRed : '#CD5C5C',
    Indigo  : '#4B0082',
    Ivory: '#FFFFF0',
    Khaki: '#F0E68C',
    Lavender: '#E6E6FA',
    LavenderBlush: '#FFF0F5',
    LawnGreen: '#7CFC00',
    LemonChiffon: '#FFFACD',
    LightBlue: '#ADD8E6',
    LightCoral: '#F08080',
    LightCyan: '#E0FFFF',
    LightGoldenRodYellow: '#FAFAD2',
    LightGray: '#D3D3D3',
    LightGrey: '#D3D3D3',
    LightGreen: '#90EE90',
    LightPink: '#FFB6C1',
    LightSalmon: '#FFA07A',
    LightSeaGreen: '#20B2AA',
    LightSkyBlue: '#87CEFA',
    LightSlateGray: '#778899',
    LightSlateGrey: '#778899',
    LightSteelBlue: '#B0C4DE',
    LightYellow: '#FFFFE0',
    Lime: '#00FF00',
    LimeGreen: '#32CD32',
    Linen: '#FAF0E6',
    Magenta: '#FF00FF',
    Maroon: '#800000',
    MediumAquaMarine: '#66CDAA',
    MediumBlue: '#0000CD',
    MediumOrchid: '#BA55D3',
    MediumPurple: '#9370D8',
    MediumSeaGreen: '#3CB371',
    MediumSlateBlue: '#7B68EE',
    MediumSpringGreen: '#00FA9A',
    MediumTurquoise: '#48D1CC',
    MediumVioletRed: '#C71585',
    MidnightBlue: '#191970',
    MintCream: '#F5FFFA',
    MistyRose: '#FFE4E1',
    Moccasin: '#FFE4B5',
    NavajoWhite: '#FFDEAD',
    Navy: '#000080',
    OldLace: '#FDF5E6',
    Olive: '#808000',
    OliveDrab: '#6B8E23',
    Orange: '#FFA500',
    OrangeRed: '#FF4500',
    Orchid: '#DA70D6',
    PaleGoldenRod: '#EEE8AA',
    PaleGreen: '#98FB98',
    PaleTurquoise: '#AFEEEE',
    PaleVioletRed: '#D87093',
    PapayaWhip: '#FFEFD5',
    PeachPuff: '#FFDAB9',
    Peru: '#CD853F',
    Pink: '#FFC0CB',
    Plum: '#DDA0DD',
    PowderBlue: '#B0E0E6',
    Purple: '#800080',
    Red: '#FF0000',
    RosyBrown: '#BC8F8F',
    RoyalBlue: '#4169E1',
    SaddleBrown: '#8B4513',
    Salmon: '#FA8072',
    SandyBrown: '#F4A460',
    SeaGreen: '#2E8B57',
    SeaShell: '#FFF5EE',
    Sienna: '#A0522D',
    Silver: '#C0C0C0',
    SkyBlue: '#87CEEB',
    SlateBlue: '#6A5ACD',
    SlateGray: '#708090',
    SlateGrey: '#708090',
    Snow: '#FFFAFA',
    SpringGreen: '#00FF7F',
    SteelBlue: '#4682B4',
    Tan: '#D2B48C',
    Teal: '#008080',
    Thistle: '#D8BFD8',
    Tomato: '#FF6347',
    Turquoise: '#40E0D0',
    Violet: '#EE82EE',
    Wheat: '#F5DEB3',
    White: '#FFFFFF',
    WhiteSmoke: '#F5F5F5',
    Yellow: '#FFFF00',
    YellowGreen: '#9ACD32'
    
}
