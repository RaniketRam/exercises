
class Pangram{
    constructor(_text){
        this.text = _text;
    }
    isPangram(){
        // return new Set([...this.text.toLowerCase().replace(/[^a-z]/g,'')]).size == 26
        var data = this.text.toLowerCase().replace().seze == 26;
        data = !data;
        console.log(data);
    }
}

// module.exports = Pangram;

var obj = new Pangram("a quick movement of the enemy will jeopardize five gunboats");

obj.isPangram();

