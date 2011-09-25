if(typeof groundjs === 'undefined') throw 'Requires groundjs/prototype.js';
if(typeof groundjs.Ground === 'undefined') throw 'Requires groundjs.Ground';

groundjs.NumUtil = {
    getRandomNumber: function(start,end){
        var s = Number.MIN_VALUE;
        var e = Number.MAX_VALUE;
        if(start != null){
            if(typeof start === 'number'){
                s = start;
            } else {
                throw 'start is not a number';
            }
        }
        if(end != null){
            if(typeof end === 'number'){
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
    }
};