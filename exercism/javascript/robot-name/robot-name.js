'use strict'

class Robot{
    constructor(){
        this.pastNames = {};
        this.name = this.generateName();
    }

    generateName(){
        var name = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
        name += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
        name += Math.random().toString(10).substr(2, 3);

        if (this.pastNames[name] || Robot.takenNames[name])
            return this.generateName();
        Robot.takenNames[name] = true;
        this.pastNames[name] = true;
        return name;

    }

    reset(){
        this.name = null;
        this.name = this.generateName();
    }
    
}

Robot.takenNames = {};

module.exports = Robot;
