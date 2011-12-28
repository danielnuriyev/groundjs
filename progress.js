// groundjs/numUtil.js ----------------------------------------------

if(typeof groundjs == 'undefined') throw 'Requires groundjs/util.js';
if(typeof groundjs.Ground == 'undefined') throw 'Requires groundjs/core.js';

groundjs.progress = function(){

	var timers = {}
	
	var start = function(divId, max, value, interval, cls, styles, factor){
    	
		//console.log('max: ' + max + ", val: " + value + ", " + factor )
		
		if(!factor) factor = 2;
		
    	var next = true;
    	
    	var div = document.getElementById('progress_' + divId);
    	if(value > max - max/factor){
    		max *= factor;
    		div.setAttribute('max', '' + max);
    		value *= factor; 
    		factor *= 2;
    	}
    	
    	if(value >= max){
    		value = max - 1;
    		next = false;
    	}
    	
    	if(div){
    		div.setAttribute('value', '' + value);
    	} else {
    		div = document.getElementById(divId);
        	div.innerHTML = '<progress id="progress_' + divId + '" value="' + value + '" max="' + max + '"' +
        		(cls ? ' class="' + cls + '" ' : '') +
        		(styles ? ' style="' + styles + '" ' : '') + 
        		'></progress>';
    	}
    	
    	if(next){
    		timers[divId] = setTimeout(function(){
	    		groundjs.progress.start(divId, max, ++value, interval, cls, styles, factor);
	    	}, interval);
    	}
    	
    }
	
	var hide = function(divId){
		
		clearTimeout(timers[divId]);
		delete timers[divId];
		
		var div = document.getElementById('progress_' + divId);
    	if(div){
    		div = document.getElementById(divId);
    		div.innerHTML = '';
    	}   		
    }
	
	return {
		start: start,
		hide: hide
	}

}();