var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(input) {
  returnVal = '';

  for (var i = 0, len = input.length; i < len; i++)
  {
    switch(input.charAt(i))
    {
      case 'G':
        returnVal += 'C';
        break;
      case 'C':
        returnVal += 'G';
        break;
      case 'T':
        returnVal += 'A';
        break;
      case 'A':
        returnVal += 'U';
        break;
      default:
        throw new Error('Invalid input');
        break;
    }
  }

  return returnVal;
};

module.exports = DnaTranscriber;
