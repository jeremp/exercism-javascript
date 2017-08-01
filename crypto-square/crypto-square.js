
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
    for (var index = 0; index < size; index++) {
        let subStr = extractTextBlock(this.normalized, size, index)
        if(subStr && subStr.trim().length>0){
            res.push(subStr)
        }
    }
    return res        
}

/**
 * Fonction de cryptographie
 */
Crypto.prototype.ciphertext = function(){
    let segments = this.plaintextSegments()
    let result = ""
    //console.log("time to cipher "+this.normalized+" so "+ this.plaintextSegments())
    for (var index = 0; index < segments[0].length; index++) {           
        for (var i = 0; i < segments.length; i++) {
            //console.log("append "+segments[i].charAt(index))
            result = result + segments[i].charAt(index)
        }
    }
    return result
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
