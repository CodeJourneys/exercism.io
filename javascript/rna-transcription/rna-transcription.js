var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(input) {

  return input.split('')
    .map(function(item)
      {
        switch(item)
        {
          case 'G':
            return 'C';
          case 'C':
            return 'G';
          case 'T':
            return 'A';
          case 'A':
            return 'U';
          default:
            throw new Error('Invalid input');
        }
      })
    .join('');
};

module.exports = DnaTranscriber;
