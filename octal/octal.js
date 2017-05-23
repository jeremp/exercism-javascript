var Octal = function(word){
    this.word = word ;    
};

Octal.prototype.toDecimal = function(){
   var array  = this.word.split("").reverse();
    var result = 0 ;    
    if(array && array.length>0){                
        for(var i=0 ; i<array.length ; i++){
            var number = array[i];
            //console.log(number+"->"+isNaN(number))
            if(isNaN(number) || parseInt(number)>7){
                // if we found an invalid char we return 0 ;
                return 0 ;        
            }
            
            var numeric = parseInt(number);            
            if(numeric>0){            
                result += (numeric * Math.pow(8, i))  ;
            }
        }
    }
    return result ;
}

module.exports = Octal;