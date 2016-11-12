
var Year = function(y) {
    this.y = y ;
};

Year.prototype.isLeap = function() {
    if( (this.y % 100) == 0 && (this.y % 400) != 0){
        return false ;        
    }else{
        return (this.y % 4) == 0 ;
    }    
};

module.exports = Year;
