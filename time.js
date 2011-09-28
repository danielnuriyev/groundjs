if(typeof groundjs === 'undefined') throw 'Requires groundjs/prototype.js';
if(typeof groundjs.Ground === 'undefined') throw 'Requires groundjs.Ground';

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
    millenia: 'millenia'
    
    //get: function(){}
    
}

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
        if(typeof t !== groundjs.Type.STRING) throw 'Invalid argument'
        
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
}