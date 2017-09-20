// MY CODE STARTS FORM HERE.................

// creating the construction class
var DnaTranscriber = function() {};

// adding the prototype or method(toRna) to the construction
DnaTranscriber.prototype.toRna = function(get_dna) {
    var dna = get_dna;
      switch(dna) {
        case 'G': dna = 'C';
          break;
        case 'C': dna = 'G';
          break;
        case 'T': dna = 'A';
          break;
        case 'A': dna = 'U';
          break;
        default:
          throw Error('Invalid input');
    }
  return dna;
};


module.exports = DnaTranscriber;