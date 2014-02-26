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