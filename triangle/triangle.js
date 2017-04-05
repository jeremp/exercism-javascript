var Triangle = function(c1, c2, c3) {
    this.c1 = c1 ;
    this.c2 = c2 ;
    this.c3 = c3 ;  
    var array = [c1, c2, c3];
    this.array = array.sort(function(a,b){return a-b});    
};

Triangle.prototype.kind = function(){
    this.checkLengths();
    if(this.c1 === this.c2 && this.c2 === this.c3){
        return 'equilateral'
    }else if(
        this.c1 === this.c2 ||
        this.c2 === this.c3 ||
        this.c3 === this.c1
    ){
        return 'isosceles'
    }else{
        return 'scalene'
    }
}

Triangle.prototype.checkLengths = function(){
    if(this.c1 <= 0 || this.c2 <= 0 || this.c3 <= 0){
        throw new Error("size can't be less or equals zero");
    }else{
        if((this.array[2] <= this.array[1]+this.array[0])==false){
            throw new Error("inequality detected");        
        }       
    }
}

module.exports = Triangle;