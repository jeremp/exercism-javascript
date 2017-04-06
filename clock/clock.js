var Clock = function(h, m) {

    // storing original values to easily perform plus
    this.originalH = h ;
    this.originalM = m ;

    this.hours = 0 ;
    this.minutes = 0 ; 

    if(isNaN(m)){m=0}    

    // set the minut field
    this.minutes = this.computeMinutes(m)
    // set the hour field : add hours if minutes absolute value is > 60
    this.hours = this.computeHours(h + this.computeHoursOverFlowFromMinutes(m))
}

Clock.at = function(h,m){    
    return new Clock(h, m)
}

Clock.prototype.computeHours = function(h){
    var res = h % 24 ;
    if(res>=0){
        return res
    }else{        
        return Math.abs((Math.floor(res/24) * 24) - res)
    }
}

Clock.prototype.computeMinutes = function(m){
    var res =  m % 60 ;
    if(res >= 0){
        return res 
    }else{
        return Math.abs((Math.floor(res/60) * 60) - res)
    }

}

Clock.prototype.computeHoursOverFlowFromMinutes = function(m){
    return Math.floor(m/60)
}

Clock.prototype.plus = function(nbMinutes){
    return new Clock(this.originalH, this.originalM + nbMinutes)
}

Clock.prototype.minus = function(nbMinutes){
    return new Clock(this.originalH, this.originalM - nbMinutes)
}

Clock.prototype.toString = function(){
    return ('0' + this.hours).slice(-2)+':'+('0' + this.minutes).slice(-2)
}

Clock.prototype.equals = function(anotherClock){    
    return this.hours === anotherClock.hours && this.minutes === anotherClock.minutes
}

module.exports = Clock;