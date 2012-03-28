// groundjs/url.js ---------------------------------------------------

if(typeof groundjs === 'undefined') throw 'Requires groundjs/util.js';
if(typeof groundjs.Ground === 'undefined') throw 'Requires groundjs/core.js';

groundjs.URL = function(){ 
    var g = groundjs;
    var parse = function(url){
		var regex = /^([^:]*:\/\/)?([^:]*:[^@]*@)?([^\/:\?]*\.?[^\/:\?]*)?(:[^\/]*)?(\/[^?#]*)?(\?[^#]*)?(#.*)?$/i;
		//var url = uri.match(/^([^:]*:\/\/)?([^:]*:[^@]*@)?([^\/:]*\.[^\/:]*)?(:[^\/]*)?(\/[^?#]*)?(\?[^#]*)?(#.*)?$/i);
		var obj = url.match(regex);
		//delete url.input;
		obj.protocol = ((url[1])?url[1]:'http://').split('://')[0];
		obj.user = (url[2])?url[2].split(':')[0]:undefined;
		obj.password = (url[2])?url[2].split(':')[1].split('@')[0]:undefined;
		obj.host = (url[3])?url[3]:location.host;
		obj.hostname = obj.host;
		obj.port = (url[4])?((isNaN(parseInt(url[4].split(':')[1])))?80:parseInt(url[4].split(':')[1])):80;
		obj.path = (url[5])?url[5]:'/';
		obj.pathname = obj.path;
		obj.search = url[6] ? url[6].split('?')[1] : undefined;
		obj.query = obj.search;
		obj.fragment = (url[7])?url[7].split('#')[1]:undefined;
		obj.hash = obj.fragment;
		obj.href = ''
			+ obj.protocol + '://'
			+ ((obj.user)?obj.user+':'+obj.password+'@':'')
			+ obj.host
			+ ((obj.port != 80)?':'+obj.port:'')
			+ obj.path
			+ ((obj.search)?'?'+obj.search:'')
			+ ((obj.fragment)?'#'+obj.fragment:'');
                
       return obj;    
                   
    }
    var format = function(url){
    	return ''
			+ url.protocol + '://'
			+ ((url.user)?url.user+':'+url.password+'@':'')
			+ url.host
			+ ((url.port != 80)?':'+url.port:'')
			+ url.path
			+ ((url.search)?'?'+url.search:'')
			+ ((url.fragment)?'#'+url.fragment:'');
    }
    var isLocal = function(url){
        var re = /^(?:about|app|app\-storage|.+\-extension|file|widget):$/;
        url = g.URL.parse(url);
        return re.test(url.protocol);
    }
    /**
     * converts a map to & separated string
     */
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
    /**
     * @Deprecated use append
     */
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
    var append = function(url, tail){
        if(tail == null){
            return url;
        }
        url = g.StringUtil.trim(url);
        tail = g.StringUtil.trim(tail);
        if(tail.length == 0){
            return g.URL.format(url);
        }
        
        _url = g.URL.parse(url);
        
        if(_url.fragment){
        	return url;
        } else if(_url.search){
        	//TODO:
        	/*
        	if(tail.indexOf('/') == 0){
        	} else if(tail.indexOf('?') == 0){
        	} else if(tail.indexOf('#') == 0){
        	} else if(tail.indexOf('=') > -1){
        	} else {
        	}
        	*/
       		_url.search += '&' + tail;
       		return g.URL.format(_url);
        } else if(_url.path){        	
        	var i = tail.indexOf('/');
        	if(i > -1){
        		var tmp = g.StringUtil.endsWith(_url.path, '/') ? _url.path.substring(0, _url.path.length - 1) : _url.path;
           		tmp += g.StringUtil.startsWith(tail, '/') ? tail : '/' + tail; 
           		_url.path = tmp;
        	} else {
        		//TODO: what does tail start with
        		var tmp = g.StringUtil.endsWith(_url.path, '?') ? _url.path.substring(0, _url.path.length - 1) : _url.path;
           		tmp += g.StringUtil.startsWith(tail, '?') ? tail : '?' + tail; 
           		_url.path = tmp;
        	}
        	return g.URL.format(_url);
        } else {
        	//TODO: if starts with /
        	return url + '?' + tail;
        }
    }
    return {
        parse:parse,
        format:format,
        isLocal:isLocal,
        toParameters:toParameters,
        appendParameters:appendParameters,
        append:append
    }
    
}();
