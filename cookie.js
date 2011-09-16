if(typeof groundjs === 'undefined') throw 'Requires groundjs/prototype.js';
if(typeof groundjs.Ground === 'undefined') throw 'Requires groundjs.Ground';

groundjs.Cookie = {
    set: function(name, value, daysToExpire) {//TODO: use not only days
        
        //null, !string, empty
        if(name == null || (typeof name === 'string' && name.trim().length == 0)){
            throw 'Cannot set empty cookie name';
        }
        
        if(typeof value === 'string'){
            value.trim();
        } else if(value == null){
            value = '';
        }
        
        if(typeof daysToExpire === 'number'){
            var d = new Date();
            d.setDate(d.getDate() + daysToExpire);
            value += '; expires=' + d.toUTCString();
        }
        document.cookie = name + '=' + value;
    },

    get: function(name){
        
        if(typeof document.cookie === 'undefined' || document.cookie == null){
            return null;
        }
        
        if(typeof name === 'string'){
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
