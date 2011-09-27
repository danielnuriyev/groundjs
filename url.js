if(typeof groundjs === 'undefined') throw 'Requires groundjs/prototype.js';
if(typeof groundjs.Ground === 'undefined') throw 'Requires groundjs.Ground';

groundjs.URL = { 
    parse: function(url){
		var regex = /^([^:]*:\/\/)?([^:]*:[^@]*@)?([^\/:\?]*\.[^\/:\?]*)?(:[^\/]*)?(\/[^?#]*)?(\?[^#]*)?(#.*)?$/i;
		//var url = uri.match(/^([^:]*:\/\/)?([^:]*:[^@]*@)?([^\/:]*\.[^\/:]*)?(:[^\/]*)?(\/[^?#]*)?(\?[^#]*)?(#.*)?$/i);
		url = url.match(regex);
		delete url.input;
		url.protocol = ((url[1])?url[1]:'http://').split('://')[0];
		url.user = (url[2])?url[2].split(String.colon)[0]:undefined;
		url.password = (url[2])?url[2].split(String.colon)[1].split(String.at)[0]:undefined;
		url.host = (url[3])?url[3]:location.host;
		url.hostname = url.host;
		url.port = (url[4])?((isNaN(parseInt(url[4].split(String.colon)[1])))?80:parseInt(url[4].split(String.colon)[1])):80;
		url.path = (url[5])?url[5]:String.slash;
		url.pathname = url.path;
		url.search = (url[6])?url[6].split(String.question)[1]:undefined;
		url.query = url.search;
		url.fragment = (url[7])?url[7].split(String.pound)[1]:undefined;
		url.hash = url.fragment;
		url.href = String.empty
			+ url.protocol + '://'
			+ ((url.user)?url.user+String.colon+url.password+String.at:String.empty)
			+ url.host
			+ ((url.port != 80)?String.colon+url.port:String.empty)
			+ url.path
			+ ((url.search)?String.question+url.search:String.empty)
			+ ((url.fragment)?String.pound+url.fragment:String.empty);
                
                return url;    
                   
    }
}