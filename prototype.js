if(typeof String.trim === 'undefined'){
    String.prototype.trim = function(){
        return this.replace(/^\s+|\s+$/g, '');
    };
};

if(typeof String.endsWith === 'undefined'){
    String.prototype.endsWith = function(s){
        if(s == null) return false;
        if(typeof s !== 'string'){
            s = s.toString();
        }
        return this.lastIndexOf(s) + s.length == this.length;
    };
};

groundjs = {};
