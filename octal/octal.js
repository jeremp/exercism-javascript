var Octal = function(word){
    this.word = word ;    
};

Octal.prototype.toDecimal = function(){
   var array  = this.word.split("").reverse();
    var result = 0 ;    
    if(array && array.length>0){                
        for(var i=0 ; i<array.length ; i++){
            var number = array[i];            
            var numeric = parseInt(array[i]);            
            if(numeric>0){            
                result += Math.pow(8, i);  ;
            }
        }
    }
    return result ;
}

module.exports = Octal;