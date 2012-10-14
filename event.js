if(typeof groundjs === 'undefined') throw 'Requires groundjs/util.js';
if(typeof groundjs.Ground === 'undefined') throw 'Requires groundjs/core.js';

groundjs.event = function(){
	
	var listeners = {};
		
	var listen = function(eventType, func){
		
		if(typeof func != g.Type.FUNCTION) throw "event listener must be a function";
		
		if(!listeners[eventType]){
			listeners[eventType] = new Array();
		}
		
		for(var i = 0; i < listeners[eventType].length; i++){
			if(listeners[eventType][i] === func) return;
		}
		
		listeners[eventType].push(func);
	}
	
	var fire = function(eventType, data){
		if(listeners[eventType]){
			for(var i = 0; i < listeners[eventType].length; i++){
				listeners[eventType][i](data);
			}
		}
	}
	
	return {
		listen:listen,
		fire:fire
		}
	
}();