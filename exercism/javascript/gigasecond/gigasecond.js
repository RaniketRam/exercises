var Gigasecond = function(givenDate){
    this.givenDate = givenDate;
};


Gigasecond.prototype.date = function(){

    let inMiliSeconds = this.givenDate.getTime();

    // converting the given seconds to exponential form
    // let n = givenSeconds.toExponential();


    // we need to add the given seconds
    let totalSeconds = inMiliSeconds + 1000000000000; 

    var date = new Date(totalSeconds);


    // returns the desired date.
    return date;

};

module.exports = Gigasecond;

