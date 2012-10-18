if(typeof groundjs === 'undefined') throw 'Requires groundjs/util.js';
if(typeof groundjs.Ground === 'undefined') throw 'Requires groundjs/core.js';

groundjs.event = function(){
	
	var listeners = {};
		
	var subscribe = function(eventType, func){
		
		if(typeof func != g.Type.FUNCTION) throw "event listener must be a function";
		
		if(!listeners[eventType]){
			listeners[eventType] = new Array();
		}
		
		for(var i = 0; i < listeners[eventType].length; i++){
			if(listeners[eventType][i] === func) return;
		}
		
		listeners[eventType].push(func);
	}
	
	var unsubscribe = function(eventType, func){
		
		if(listeners[eventType]){
		
			if(func){
			
				for(var i = 0; i < listeners[eventType].length; i++){
					if(listeners[eventType][i] === func){
						listeners[eventType].splice(i,1);
						break;
					}
				}
				
				if(listeners[eventType].length == 0) delete listeners[eventType];
			
			} else {
				delete listeners[eventType];
			}
		
		}
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