
var Robot = function () {
    this.reset();
};


Robot.prototype.reset = function () {    
    this.name = generateName();
    while(robotNames[this.name]===true){
        this.name = generateName();        
    }
    //console.log('Hello my name is '+this.name);
    robotNames[this.name] = true;
};

var robotNames = {};

var generateName = function () {
    return randomLetter(2)+randomNumber(3);
}

var randomNumber = function(size){
    return randomString(size, "0123456789");
}

var randomLetter = function(size){
    return randomString(size, "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
}

var randomString = function(size, possible){
    var text = "";    
    for( var i=0; i < size; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

module.exports = Robot;