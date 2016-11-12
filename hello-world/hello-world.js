//
// This is a stub file for the 'Hello World' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at hello-world.spec.js--that should give you some hints about what is
// expected here.

var HelloWorld = function() {};

var helloStart = 'Hello, ';
var helloEnd = '!';

HelloWorld.prototype.hello = function(input) {

    if(input){
        return  helloStart + input + helloEnd ;         
    }else{
        return  helloStart + "World" + helloEnd ;
    }

};

module.exports = HelloWorld;
