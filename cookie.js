if(typeof groundjs === 'undefined') throw 'Requires groundjs/prototype.js';
if(typeof groundjs.Ground === 'undefined') throw 'Requires groundjs.Ground';

groundjs.Cookie = {
    /**
     * Sets a cookie
     * @param name name of the cookie
     * @param value value of the cookie
     * @param time time after which the cookie will expire. 
     *          By default the number of days.
     * @param timeUnit. If not set, expiration is counted in days. 
     *          Possible values: 'minutes', 'hours', 'days', 'weeks', 'months', 'years'
     */
    set: function(name, value, time, timeUnit) {
        
        //null, !string, empty
        if(name == null || (typeof name === groundjs.Type.STRING && name.trim().length == 0)){
            throw 'Cannot set empty cookie name';
        }
        
        if(typeof value === groundjs.Type.STRING){
            value.trim();
        } else if(value == null){
            value = '';
        }
        
        if(typeof time === groundjs.Type.NUMBER){
            var d = new Date();
            
            if(timeUnit == null){
                d.setDate(d.getDate() + time);
            } else{
                timeUnit = timeUnit.trim().toLowerCase();
                if(timeUnit.indexOf('minute') == 0){
                    d.setMinutes(d.getMinutes() + time);
                } else if(timeUnit.indexOf('hour') == 0){
                    d.setHours(d.getHours() + time);
                } else if(timeUnit.indexOf('week') == 0){
                    d.setDate(d.getDate() + time * 7);
                } else if(timeUnit.indexOf('month') == 0){
                    d.setMonth(d.getMonth() + time);
                } else if(timeUnit.indexOf('year') == 0){
                    d.setFullYear(d.getFullYear() + time);
                } else {
                    d.setDate(d.getDate() + time);
                }
            }
            
            value += '; expires=' + d.toUTCString();
        }
        document.cookie = name + '=' + value;
    },

    get: function(name){
        
        if(typeof document.cookie === groundjs.Type.UNDEFINED || document.cookie == null){
            return null;
        }
        
        if(typeof name === groundjs.Type.STRING){
            name.trim();
        }
        
        var cookies = document.cookie.split(';');
        var count = cookies.length;
        var cookie, idx, n, v;
        for(var i = 0; i < count; i++) {
            cookie = cookies[i];
            idx = cookie.indexOf('=');
            n = cookie.substr(0, idx);
            if (n == name) {
                v = cookie.substr(idx + 1);
                return unescape(v);
            }
        }
    }
};
