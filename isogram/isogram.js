var Isogram = function(word){
    this.word = word ;    
};

Isogram.prototype.isIsogram = function(){
    if(this.word && this.word.trim().length>0){
       // var theWord = this.word.normalize('NFD');
        var letterTab = this.word.split('');
        var alreadySeenLetters = [];
        console.log("word="+this.word);
        for(var i=0 ; i<letterTab.length ; i++){            
            var currentLetter = letterTab[i].toLowerCase();            
            // we must ignore blak characters str.match(/[a-z]/i)
            if(currentLetter.match(/(?i)(?:(?![×Þß÷þø])[a-zÀ-ÿ])/i)){
                console.log("current letter : "+currentLetter);
                if(alreadySeenLetters.includes(currentLetter)){
                    return false ;
                }else{
                    alreadySeenLetters.push(currentLetter);
                }
            }
        }
    }
    return true;
}

module.exports = Isogram;