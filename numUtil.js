// groundjs/numUtil.js -----------------------------------------------

if(typeof groundjs === 'undefined') throw 'Requires groundjs/util.js';
if(typeof groundjs.Ground === 'undefined') throw 'Requires groundjs/core.js';

groundjs.NumUtil = {
    getRandomNumber: function(start,end){
        var s = Number.MIN_VALUE;
        var e = Number.MAX_VALUE;
        if(start != null){
            if(typeof start === groundjs.Type.NUMBER){
                s = start;
            } else {
                throw 'start is not a number';
            }
        }
        if(end != null){
            if(typeof end === groundjs.Type.NUMBER){
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
    },
    getRandomArrayElement: function(obj){
        if(obj.length){
            return obj[Math.floor(Math.random() * obj.length)];
        } else {
            throw 'Not an array';
        }
    },
    isNumber :function(obj){
    	return !isNaN(parseFloat(obj)) && isFinite(obj)
    }
};