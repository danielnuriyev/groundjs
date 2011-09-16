if(typeof groundjs === 'undefined') throw 'Requires groundjs/prototype.js';
if(typeof groundjs.Ground === 'undefined') throw 'Requires groundjs.Ground';

groundjs.TimeUtil = {
    parseTimeSpan: function(t){
        
        if(t == null) return null;
        if(typeof t !== 'string') throw 'Invalid argument'
        
        if(t.indexOf('minute') > -1){
            var re = new RegExp('[0-9]+');
            var match = re.exec(t);
            var t = 1;
            if(match && match.length > 0){
                t = match[0]
            }
            return t * 60 * 1000;
        } else if(t.indexOf('hour') > -1){
            var re = new RegExp('[0-9]+');
            var match = re.exec(t);
            var t = 1;
            if(match && match.length > 0){
                t = match[0]
            }
            return 60 * 60 * 1000;
        } else if(t.indexOf('day') > -1){
            var re = new RegExp('[0-9]+');
            var match = re.exec(t);
            var t = 1;
            if(match && match.length > 0){
                t = match[0]
            }
            return t * 24 * 60 * 60 * 1000;
        } else if(t.indexOf('week') > -1){
            var re = new RegExp('[0-9]+');
            var match = re.exec(t);
            var t = 1;
            if(match && match.length > 0){
                t = match[0]
            }
            return t * 7 * 24 * 60 * 60 * 1000;
        } else if(t.indexOf('month') > -1){
            var re = new RegExp('[0-9]+');
            var match = re.exec(t);
            var t = 1;
            if(match && match.length > 0){
                t = match[0]
            }
            return t * 31 * 24 * 60 * 60 * 1000;
         } else if(t.indexOf('year') > -1){
            var re = new RegExp('[0-9]+');
            var match = re.exec(t);
            var t = 1;
            if(match && match.length > 0){
                t = match[0]
            }
            return t * 366 * 24 * 60 * 60 * 1000;
        } else return null;
    }
}