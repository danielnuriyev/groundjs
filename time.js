// groundjs/time.js --------------------------------------------------

if(typeof groundjs === 'undefined') throw 'Requires groundjs/util.js';
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
    },
    
    getTimePoint: function(t){
    	
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
}