
var Hamming = function () { };

Hamming.prototype.compute = function (a, b) {
    var diffCount = 0;
    if (a && b) {
        if(a.length==b.length){
            for(i=0; i<a.length ; i++){
                if(a.charAt(i)!==b.charAt(i)){
                    diffCount++ ;
                }        
            }        
        }else{
             throw new Error("DNA strands must be of equal length.");
        }
    }
    return diffCount;

};

module.exports = Hamming;
