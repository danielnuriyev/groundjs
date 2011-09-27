// String -----------------------------------------------------

if(typeof String.empty === 'undefined'){  String.empty = ''; }
if(typeof String.dot === 'undefined'){  String.dot = '.'; }
if(typeof String.period === 'undefined'){  String.period = '.'; }
if(typeof String.underscore === 'undefined'){  String.underscore = '_'; }
if(typeof String.colon === 'undefined'){  String.colon = ':'; }
if(typeof String.semicolon === 'undefined'){  String.semicolon = ';'; }
if(typeof String.comma === 'undefined'){  String.comma = ','; }
if(typeof String.question === 'undefined'){  String.question = '?'; }
if(typeof String.equal === 'undefined'){  String.equal = '='; }
if(typeof String.dash === 'undefined'){  String.dash = '-'; }
if(typeof String.hyphen === 'undefined'){  String.hyphen = '-'; }
if(typeof String.minus === 'undefined'){  String.minus = '-'; }
if(typeof String.slash === 'undefined'){  String.slash = '/'; }
if(typeof String.divide === 'undefined'){  String.divide = '/'; }
if(typeof String.plus === 'undefined'){  String.plus = '+'; }
if(typeof String.multiply === 'undefined'){  String.multiply = '*'; }
if(typeof String.asterisk === 'undefined'){  String.asterisk = '*'; }
if(typeof String.pipe === 'undefined'){  String.pipe = '|'; }
if(typeof String.pound === 'undefined'){  String.pound = '#'; }
if(typeof String.hash === 'undefined'){  String.hash = '#'; }
if(typeof String.dollar === 'undefined'){  String.dollar = '$'; }
if(typeof String.ampersand === 'undefined'){  String.ampersand = '&'; }
if(typeof String.percent === 'undefined'){  String.percent = '%'; }
if(typeof String.circumflex === 'undefined'){  String.circumflex = '^'; }
if(typeof String.exclamation === 'undefined'){  String.exclamation = '!'; }
if(typeof String.at === 'undefined'){  String.at = '@'; }
if(typeof String.ellipsis === 'undefined'){  String.ellipsis = '...'; }
if(typeof String.singleQuote === 'undefined'){  String.singleQuote = "'"; }
if(typeof String.doubleQuote === 'undefined'){  String.doubleQuote = '"'; }
if(typeof String.leftBracket === 'undefined'){  String.leftBracket = '('; }
if(typeof String.rightBracket === 'undefined'){  String.rightBracket = ')'; }

if(typeof String.leftAngleBracket === 'undefined'){  String.leftAngleBracket = '<'; }
if(typeof String.rightAngleBracket === 'undefined'){  String.rightAngleBracket = '>'; }
if(typeof String.less === 'undefined'){  String.less = '<'; }
if(typeof String.greater === 'undefined'){  String.greater = '>'; }

if(typeof String.leftSquareBracket === 'undefined'){  String.leftSquareBracket = '['; }
if(typeof String.rightSquareBracket === 'undefined'){  String.rightSquareBracket = ']'; }

if(typeof String.leftCurlyBracket === 'undefined'){  String.leftCurlyBracket = '{'; }
if(typeof String.rightCurlyBracket === 'undefined'){  String.rightCurlyBracket = '}'; }

if(typeof String.greaterEqual === 'undefined'){  String.greaterEqual = '>='; }
if(typeof String.lessEqual === 'undefined'){  String.lessEqual = '<='; }

if(typeof String.space === 'undefined'){  String.space = ' '; }
if(typeof String.newLine === 'undefined'){  String.newLine = '\n'; }
if(typeof String.carriageReturn === 'undefined'){  String.carriageReturn = '\r'; }
if(typeof String.tab === 'undefined'){  String.tab = '\t'; }

if(typeof String.trim === 'undefined'){
    String.prototype.trim = function(){
        return this.replace(/^\s+|\s+$/g, '');
    };
};

if(typeof String.startsWith === 'undefined'){
    String.prototype.startsWith = function(s){
        if(s == null) return false;
        if(typeof s !== 'string'){
            s = s.toString();
        }
        return this.indexOf(s) == 0;
    };
};

if(typeof String.endsWith === 'undefined'){
    String.prototype.endsWith = function(s){
        if(s == null) return false;
        if(typeof s !== 'string'){
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
        if(typeof s !== 'string'){
            s = s.toString();
        }
        if(typeof pad !== 'string'){
            pad = pad.toString();
        }
        if(typeof max !== 'number' || max < s.length()){
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

// Array ------------------------------------------------------

/**
 * The array must be sorted
 */
Array.prototype.binarySearch = function(find, comparator) {
  var low = 0, high = this.length - 1, i, comparison, div = 2;
  while (low <= high) {
    i = Math.floor((low + high) / div);
    comparison = comparator(this[i], find);
    if (comparison < 0) { low = i + 1; continue; };
    if (comparison > 0) { high = i - 1; continue; };
    return i;
  }
  return null;
};

groundjs = {};
