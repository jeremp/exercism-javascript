var Clock = function(hours, minutes) {
    this.hours = hours 
    this.minutes = minutes
}

Clock.at = function(h,m){
    console.log("\n------")
    console.log("h="+h+"  m="+m)
    /* m is not mandatory */
    if(isNaN(m)){m=0}    

    /* negative hours or minutes */
    h = fixHours(h)        
    /* lets work on the hours */
    let hours = h + gimmeNbHours(m);
    console.log("hours="+hours)
    if(hours>24){
        hours = Math.floor(hours % 24)
    }if(hours<0){
        hours = 24 + hours
    }
    /* hour 24 is a special case */
    if(hours==24){
        hours=0
    }
    hours = fixHours(hours)        
    //console.log("h="+h+"  m="+m+"   hours="+hours+"   ")
    let minutes = fixMinutes(m) ;
    return new Clock(hours, minutes)
}

Clock.prototype.toString = function(){
    return ('0' + this.hours).slice(-2)+':'+('0' + this.minutes).slice(-2)
}

Clock.prototype.equals = function(anotherClock){
    return this.hour == anotherClock.hour && this.minutes == anotherClock.minutes
}

fixHours = function(hours){
    if(Math.abs(hours)>=24){
        hours = Math.floor(hours % 24)
    }
    if(hours<0){
        hours = 24 + hours    
    }
    return hours
}

fixMinutes = function(minutes){
    var res = minutes % 60 ;
    if(res<0){
        return 60 + res
    }else{
        return res
    }
}

gimmeNbHours = function(minutes){    
    return Math.floor(minutes/60)
}

module.exports = Clock;