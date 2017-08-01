
var Crypto = function (input) {
    this.input = input 
    this.normalized = normalizePlaintext(this.input)
 };

Crypto.prototype.normalizePlaintext = function () {
    var result = normalizePlaintext(this.input)
    //console.log(this.input + " gives " + normalized)
    return result
};

/**
 * Normaliser le texte
 * @param {*} text 
 */
var normalizePlaintext = function(text){
    return text.replace(/[^0-9a-z]/gi, '').toLowerCase()
}

/**
 * Calcule la taille du carré
 */
Crypto.prototype.size = function(){
    let sqrt = Math.sqrt(this.normalized.length) 
    if(Number.isInteger(sqrt)){
        return sqrt
    }else{
        // si la racine carré est décimale on retourne l'entier supérieur
        return Math.floor( sqrt + 1 )
    }
}

/**
 * Calcule la taille du carré
 */
Crypto.prototype.plaintextSegments = function(){
    var res = []
    let size = this.size()
    for (var index = 0; index < size-1; index++) {
        let subStr = extractTextBlock(this.normalized, size, index)
        //console.log("subStr = "+subStr)
        res.push(subStr)         
    }
    return res        
}

/**
 * Extraire un block de texte
 * @param {*} text le texte complet
 * @param {*} blockSize la taille des block
 * @param {*} blockNumber le numéro du block (commence à 0)
 */
var extractTextBlock = function(text, blockSize, blockNumber){
    let startIndex  = blockSize*blockNumber
    let endIndex = startIndex+blockSize
    return text.substring(startIndex, endIndex)
}

module.exports = Crypto;
