var Binary = function(word){
    this.word = word ;    
};

Binary.prototype.toDecimal = function(){
    var array  = this.word.split("").reverse();
    var result = 0 ;    
    if(array && array.length>0){                
        for(var i=0 ; i<array.length ; i++){
            var number = array[i];
            if(number!=='0' && number!=='1'){
                // if we found an invalid char we return 0 ;
                return 0 ;        
            }
            
            var numeric = parseInt(array[i]);            
            if(numeric>0){            
                result += Math.pow(2, i);  ;
            }
        }
    }
    return result ;
}

module.exports = Binary;