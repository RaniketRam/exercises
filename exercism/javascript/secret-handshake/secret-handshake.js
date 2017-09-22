class SecretHandshake{
    constructor(decimal){

        if(Number.isInteger(decimal)){
            this.decimal = decimal;
        }else{
            throw new Error('Handshake must be a number');
        }
        // this.commands = this.getArrayOfStr();
    }

    commands () {
        // function to convert the decimal to binary.
        var ConvertBase = function (num) {
            return {
                from : function (baseFrom) {
                    return {
                        to : function (baseTo) {
                            return parseInt(num, baseFrom).toString(baseTo);
                        }
                    };
                }
            };
        };
        var data = ConvertBase(this.decimal).from(10).to(2);

        // // reverse the string 
        data = data.split('').reverse().join('');


        var strArray = new Array();
        for(var i = 0; i < data.length; i++){
            if(data.charAt(i) == 1 && i == 0){
                strArray.push('wink');
            }if(data.charAt(i) == 1 && i == 1){
                strArray.push('double blink');
            }if(data.charAt(i) == 1 && i == 2){
                strArray.push('close your eyes');
            }if(data.charAt(i) == 1 && i == 3){
                strArray.push('jump');
            }if(data.charAt(i) == 1 && i == 4){
                // reverse the array.
                strArray.reverse();
            }else{
                // throw the error.
            }
        }
        return strArray;
    }
}

module.exports = SecretHandshake;