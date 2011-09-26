// String -----------------------------------------------------

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
