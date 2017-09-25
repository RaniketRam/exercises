class School{
    constructor(){
        this.db = {};
    }

    add(name, grade){
        if(this.db[grade] === undefined){
            this.db[grade] = [];
        }
        this.db[grade].push(name);
        this.db[grade].sort();
    }
    roster(){
        return this.db;
    }
    grade(grade){
        return (this.db[grade] === undefined) ? [] : this.db[grade];
    }
}

module.exports = School;