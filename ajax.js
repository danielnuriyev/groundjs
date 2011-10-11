if(typeof groundjs === 'undefined') throw 'Requires groundjs/util.js';
if(typeof groundjs.Ground === 'undefined') throw 'Requires groundjs.Ground';

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
     */
groundjs.ajax = function(opts){
    
    var readyState = {
        UNSENT:0,
        OPENED: 1,
        HEADERS_RECEIVED: 2,
        LOADING: 3,
        DONE: 4
        }
    
    
    /*
     * TODO:
     * encode params?
     * jquery props
     */
    
    var call = function(opts){
        if(!opts.url){
            throw 'Null URL';
        }
        var url = opts.url;
        url = url.trim();
        if(url.length == 0){
            throw 'Empty URL';
        }
        if(url.indexOf('://') != 0){
            url = 'http://' + url;
        }
        if(url.indexOf('http://') != 0 && url.indexOf('https://') != 0){
            return 'Unsupported protocol';
        }
        
        var r = window.ActiveXObject ? 
            (groundjs.URL.isLocal(url) ?  new window.ActiveXObject( "Microsoft.XMLHTTP" ) : new window.XMLHttpRequest()) : 
            new window.XMLHttpRequest();
	
        r.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        
        var method = opts.method;
        if(!method){
            method = groundjs.HTTP.GET;
        }
        
        if(method == groundjs.HTTP.GET){
            if(opts.data){
                url += groundjs.URL.appendParameters(url,data);
            }
        }
        
        var async = typeof opts.async === groundjs.Type.UNDEFINED || options.async == null ? true : opts.async;
        
        if(opts.username){
            r.open(method, url, async, opts.username, opts.password);
        } else {
            r.open(method, url, async);
        }
        r.onreadystatechange = function(){
            if (this.readyState < groundjs.ajax.readyState.DONE) return;
            if (this.status >= 200 && this.status < 300) {
                if(opts.onSuccess){
                    var response = this.responseText;
                    if(opts.dataType == 'json'){
                        response.trim();
                        response = eval(response);
                    }
                    opts.onSuccess(response);
                } 
            } else {
                if(opts.onError){
                    var response = this.responseText;
                    if(opts.dataType == 'json'){
                        response = eval(response);
                    }
                    opts.onError(response);
                } 
            }
        }

        if(method == groundjs.HTTP.POST && opts.data){
            r.send(opts.data);
        } else {        
            r.send();
        }
    }
    
    call(opts);
    
}