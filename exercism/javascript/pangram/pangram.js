// //------------------------MY FIRST CODE----------------------------
// var Pangram = function(input) {
//     this.input = input;
  
//   };
  
//   Pangram.prototype.isPangram = function(input) {
//     var alphabet = "abcdefghijklmnopqrstuvwxyz";
//     let character = this.input.toLowerCase().split('');
//     return character.filter(value => value.match(/[a-z]/) != null).length === alphabet.length;
  
  
//   };
  
//   module.exports = Pangram;


// //----------------MY SECOND CODE-------------------------------------------------------------------------------------

// // constructor function
// function Pangram (sentence){
//     this.sentence = sentence.toLowerCase(sentence);
//     this.lettersToUse = 'abcdefghijklmnopqerstuvwxyz';
// }

// Pangram.prototype.isPangram = function(){
//     // run a for loop, take out each characters from the sentence and check if this exists in lettersToUse
//     for(var i = 0; i < this.sentence.length; i++){
//         if(this.lettersToUse.indexOf(this.sentence[i]) !== -1){ // if we couldn't find the letter in our lettersToUse var
//             this.lettersToUse = this.lettersToUse.replace(this.sentence[1], ''); // making the var 'lettersToUse' empty.
//         }
//     }
    
//     // should return true or false.
//     return this.lettersToUse.length === 0 ? true : false;
// };

// module.exports = Pangram;


