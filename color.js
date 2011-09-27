if(typeof groundjs === 'undefined') throw 'Requires groundjs/prototype.js';
if(typeof groundjs.Ground === 'undefined') throw 'Requires groundjs.Ground';

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
    }
    
    //TODO: add color constants
    
}