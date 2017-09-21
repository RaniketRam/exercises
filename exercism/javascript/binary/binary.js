class Binary{
    constructor(binary){
        this.binary = binary;

        // funciton to check the validity of the given string.
        this.checkValidity = function(string){
            var re = new RegExp("^[0-1]*$"); // RegExp the looks for 0's and 1's in a given string.
            if (!string.trim()) {
                return 0;
            } else if(re.test(string)){
                return  1;
            }else{
                return 0;
            }
        }

        // function to get DECIMAL value.
        this.getDecimal = function(binary){
            var arrLength = binary.length;

            // run a loop to extract each char form the string and store them into an array.
            var arrayOfBinryDigits = new Array();
            for(var i = 0; i < arrLength; i++){
                arrayOfBinryDigits.push(binary.charAt(i)); 
            }

            var sum = 0;
            for(var i = 0; i < arrLength; i++){
                sum = sum + (arrayOfBinryDigits[i] * Math.pow(2,(arrLength-i)-1)); 
            }
            return sum;         
        }
    }

    toDecimal(){
        var decimal = '';

        // function to check the validity of the string.
        var flag = this.checkValidity(this.binary);

        // check the flag for string validity and call the function to convert the BINARY number to DECIMAL number.
        if(flag === 1){
            decimal = this.getDecimal(this.binary);
        }else{
            decimal = 0;
        }

        // return the DECIMAL number.
        return decimal;
    }
}

module.exports = Binary;