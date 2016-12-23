
var DnaTranscriber = function () { };

DnaTranscriber.prototype.toRna = function (dna) {
    var rna = '';
    for (i = 0; i < dna.length; i++) {
        rna += translate(dna.charAt(i))
    }
    return rna;
};

var translate = function (a) {    // buy_food is visible to all}    
    switch (a) {
        case 'G':
            return 'C';            
        case 'C':
            return 'G';           
        case 'T':
            return 'A';
        case 'A':
            return 'U';        
        default:
            return '';
    }
}

module.exports = DnaTranscriber;