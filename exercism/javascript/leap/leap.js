

//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// MY CODE STARTS HERE -----------------------------------------------------

var Year = function(input) {
    // creating an property to store input value.
    this.data = input;
  };
  

  Year.prototype.isLeap = function() {
    if (this.data % 4 === 0 && this.data % 100 !== 0 || this.data % 400 === 0  ) {
      return true;
    } else {
        return false;
    }
  
  };
  
  module.exports = Year;
