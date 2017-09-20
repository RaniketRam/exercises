class SpaceAge {
    constructor(seconds){
        this.seconds = seconds;

        // all the planets will use this function to get their years.
        this.getYear = function(orbitPeriod){
            var secondsInOneYear = 31557600 * orbitPeriod;
            var years = this.seconds/secondsInOneYear;
            var roundedYears = Math.round(years * 100) / 100;
            return roundedYears;
        }
    }


    onEarth(){
        var ageOnEarth = this.seconds/31557600;
        var rounded = Math.round(ageOnEarth * 100) / 100;
        return rounded;

    }
    onMercury(){
        return this.getYear(0.2408467);
    }
    onVenus(){
        return this.getYear(0.61519726);       
    }
    onMars(){
        return this.getYear(1.8808158);
    }
    onJupiter(){
        return this.getYear(11.862615);
    }
    onSaturn(){
        return this.getYear(29.447498);
    }
    onUranus(){
        return this.getYear(84.016846);
    }
    onNeptune(){
        return this.getYear(164.79132);
    }

}

SpaceAge.prototype.getYear = function(orbitPeriod){

}

module.exports = SpaceAge;