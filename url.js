if(typeof groundjs === 'undefined') throw 'Requires groundjs/util.js';
if(typeof groundjs.Ground === 'undefined') throw 'Requires groundjs.Ground';

groundjs.URL = function(){ 
    var g = groundjs;
    var parse = function(url){
		var regex = /^([^:]*:\/\/)?([^:]*:[^@]*@)?([^\/:\?]*\.[^\/:\?]*)?(:[^\/]*)?(\/[^?#]*)?(\?[^#]*)?(#.*)?$/i;
		//var url = uri.match(/^([^:]*:\/\/)?([^:]*:[^@]*@)?([^\/:]*\.[^\/:]*)?(:[^\/]*)?(\/[^?#]*)?(\?[^#]*)?(#.*)?$/i);
		url = url.match(regex);
		delete url.input;
		url.protocol = ((url[1])?url[1]:'http://').split('://')[0];
		url.user = (url[2])?url[2].split(':')[0]:undefined;
		url.password = (url[2])?url[2].split(':')[1].split('@')[0]:undefined;
		url.host = (url[3])?url[3]:location.host;
		url.hostname = url.host;
		url.port = (url[4])?((isNaN(parseInt(url[4].split(':')[1])))?80:parseInt(url[4].split(':')[1])):80;
		url.path = (url[5])?url[5]:'/';
		url.pathname = url.path;
		url.search = (url[6])?url[6].split('?')[1]:undefined;
		url.query = url.search;
		url.fragment = (url[7])?url[7].split('#')[1]:undefined;
		url.hash = url.fragment;
		url.href = String.empty
			+ url.protocol + '://'
			+ ((url.user)?url.user+':'+url.password+'@':'')
			+ url.host
			+ ((url.port != 80)?':'+url.port:'')
			+ url.path
			+ ((url.search)?'?'+url.search:'')
			+ ((url.fragment)?'#'+url.fragment:'');
                
                return url;    
                   
    }
    var isLocal = function(url){
        var re = /^(?:about|app|app\-storage|.+\-extension|file|widget):$/;
        url = g.URL.parse(url);
        return re.test(url.protocol);
    }
    var toParameters = function(obj){
        
        if(obj == null) return '';
        
        var s = '';
        for(var name in obj){
            if(s.length > 0){
                s += '&';
            }
            s += encodeURIComponent(name) + '=' + encodeURIComponent(obj[name]);
        }
        return s;
    }
    var appendParameters = function(url, parameters){
        if(parameters == null){
            return url;
        }
        url = g.StringUtil.trim(url);
        if(parameters.length == 0){
            return url;
        }
        
        if(url.indexOf('?') == -1){
            url += '?';
        } else {
            url += '&';
        }
        
        if(typeof parameters === g.Type.STRING){
            url += parameters;
        } else {
            url += g.URL.toParameters(parameters);
        }
        return url;
    }
    
    return {
        parse:parse,
        isLocal:isLocal,
        toParameters:toParameters,
        appendParameters:appendParameters
    }
    
}();
