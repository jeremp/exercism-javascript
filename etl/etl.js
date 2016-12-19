
var ETL = function () { };

ETL.prototype.transform = function (data) {    
    // we need to itearate over data's keys (properties)
    let keys = Object.keys(data);    
    let result = {};
    for(i=0 ; i<keys.length ; i++){
        // for each property (=score)
        let letterTab = data[keys[i]];
        // we iterate over the letters it contains
        for(y=0 ; y<letterTab.length ; y++){
            // and push them a properties of the returnet object            
            result[letterTab[y].toLowerCase()] = parseInt(keys[i]) ;        
        }        
    }
    return result;
};

module.exports = ETL;
