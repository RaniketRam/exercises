

function getYear(orbitPeriod){
    var secondsInOneYear = 31557600 * orbitPeriod;
    var years = 2134835688/secondsInOneYear;
    var roundedYears = Math.round(years * 100) / 100;
    return roundedYears;
}

var data = getYear(0.2408467);

console.log(data);