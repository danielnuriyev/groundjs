if(typeof groundjs === 'undefined') throw 'Requires groundjs/util.js';
if(typeof groundjs.Ground === 'undefined') throw 'Requires groundjs.Ground';
if(typeof groundjs.StringUtil === 'undefined') throw 'Requires groundjs.StringUtil';
if(typeof groundjs.URL === 'undefined') throw 'Requires groundjs.URL';

groundjs.HTTP = {
    method : {
        DELETE: 'DELETE',
        HEAD: 'HEAD',
        GET: 'GET',
        OPTIONS: 'OPTIONS',
        PATCH: 'PATCH',
        POST: 'POST',
        PUT: 'PUT',
        TRACE: 'TRACE'
        }
}

/**
     * Options:
     *  url(mandatory)
     *  method(optional): GET(default), POST etc.
     *  data(optional): object or string in the format a=b&c=d
     *  async(optional): true(default) or false.
     *  username(optional)
     *  password(optional)
     *  onSuccess(optional): function
     *  onError(optional): function
     *  datatype(optional): 'json', 'jsonp', 'text'. default: 'json'
     */
groundjs.ajax = function(opts){

    var g = groundjs;
    /*
     * TODO:
     * encode params?
     * jquery props
     */
    
    var readyState = {
        UNSENT:0,
        OPENED: 1,
        HEADERS_RECEIVED: 2,
        LOADING: 3,
        DONE: 4
        }

        if(!opts.url){
            throw 'Null URL';
        }
        var url = opts.url;
        url = g.StringUtil.trim(url);
        if(url.length == 0){
            throw 'Empty URL';
        }
        if(url.indexOf('://') == -1){//TODO: this may be in the params
            url = 'http://' + url;
        }
        if(url.indexOf('http://') != 0 && url.indexOf('https://') != 0){
            return 'Unsupported protocol';
        }
        
        var r = window.ActiveXObject ? 
            (g.URL.isLocal(url) ?  new window.ActiveXObject( "Microsoft.XMLHTTP" ) : new window.XMLHttpRequest()) : 
            new window.XMLHttpRequest();
                
        var method = opts.method;
        if(!method){
            method = g.HTTP.method.GET;
        }
        
        if(method == g.HTTP.method.GET){
            if(opts.data){
                url = g.URL.appendParameters(url,opts.data);
            }
        }
        
        if(!opts.dataType){
        	opts.dataType = 'json';
        }
        
        if(opts.dataType == 'jsonp' && method != g.HTTP.method.GET){
        	throw 'jsonp works with GET only';
        }
        
        if(opts.dataType == 'jsonp'){
        	
        	var jsonpFn = 'jsonp' + new Date().getTime();
        	
        	window[jsonpFn] = function(response) {
				if (opts.onSuccess) opts.onSuccess(response);
			};
        	
        	url = g.URL.append(url,'jsonp='+jsonpFn);
        	
        	var head = document.getElementsByTagName && document.getElementsByTagName('head') ? document.getElementsByTagName('head')[0] : document.documentElement;
        	var script = document.createElement('script');
			script.async = 'async';
			script.src = url;
			script.onload = script.onreadystatechange = function() {
				if (!script.readyState || /loaded|complete/.test(script.readyState)) {
					head.removeChild(script);
					delete window[jsonpFn];
				}
			};
			head.appendChild(script);
        } else {
	        var async = typeof opts.async === g.Type.UNDEFINED || options.async == null ? true : opts.async;
	        
	        if(opts.username){
	            r.open(method, url, async, opts.username, opts.password);
	        } else {
	            r.open(method, url, async);
	        }
	        r.setRequestHeader("content-type", "application/x-www-form-urlencoded");
	        r.onreadystatechange = function(){
	            if (this.readyState < readyState.DONE) return;
	            if (this.status >= 200 && this.status < 300) {
	                if(opts.onSuccess){
	                	var response = this.responseText;
	                	if(opts.dataType == 'json' && response){
	                		response = g.StringUtil.trim(response);
	                		if(response){
	                			response = eval('(' + response + ')');
		                    }
	                	}
	                	opts.onSuccess(response);
	                } 
	            } else {
	                if(opts.onError){
	                    var response = this.responseText;
	                    if(opts.dataType == 'json' && response){
	                        response = g.StringUtil.trim(response);
	                        if(response){
	                            response = eval('(' + response + ')');
	                        }
	                    }
	                    opts.onError(response);
	                } 
	            }
	        }
	
	        if(method == g.HTTP.method.POST && opts.data){
	            r.send(g.URL.toParameters(opts.data));
	        } else {        
	            r.send();
	        }
        
        }
    
}
