if(typeof groundjs === 'undefined') throw 'Requires groundjs/prototype.js';
if(typeof groundjs.Ground === 'undefined') throw 'Requires groundjs.Ground';

groundjs.TimeUtil = {
    /**
     * Parses a string such as '1 minute', '2 hours' etc. 
     * and returns this timespan in milliseconds.
     * Supports: minutes, hours, days, weeks, months, years.
     * 
     * TODO: centuries, millenia
     */
    parseTimeSpan: function(t){
        
        if(t == null) return null;
        if(typeof t !== 'string') throw 'Invalid argument'
        
        var re = new RegExp('[0-9]+');
        var match = re.exec(t);
        var t = 1;
        if(match && match.length > 0){
            t = match[0];
        }

        if(t.indexOf('second') > -1){
            return t * 1000;
        } else if(t.indexOf('minute') > -1){
            return t * 60 * 1000;
        } else if(t.indexOf('hour') > -1){
            return 60 * 60 * 1000;
        } else if(t.indexOf('day') > -1){
            return t * 24 * 60 * 60 * 1000;
        } else if(t.indexOf('week') > -1){
            return t * 7 * 24 * 60 * 60 * 1000;
        } else if(t.indexOf('month') > -1){
            return t * 31 * 24 * 60 * 60 * 1000;
        } else if(t.indexOf('year') > -1){
            return t * 366 * 24 * 60 * 60 * 1000;
        } else return null;
    }
}