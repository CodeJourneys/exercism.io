var Cipher = function(cipherKey)
  {
    let keyLen = 200;
    this.alphabet = [
      "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
      "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ];

    if(!arguments.length) {
      this.key = this.alphabet[Math.floor(Math.random() * 25)];
      for(var i = 0; i < keyLen; i++)
      {
        this.key += this.alphabet[Math.floor(Math.random() * 25)];
      }
    }
    else {
      if(!/^[a-z]+$/.test(cipherKey)) throw new Error("Bad key");
      this.key = cipherKey;
    }
  };

  Cipher.prototype.encode = function(cipherText) {
    let alphabet = this.alphabet, key = this.key,
    returnFunction = function(charVal, arrayIndex)
      {
        return alphabet[(alphabet.indexOf(charVal) +
        alphabet.indexOf(key[arrayIndex % key.length])) % alphabet.length];
      };
    return this.ncode(cipherText, returnFunction);
  };

  Cipher.prototype.decode = function(cipherText) {
    let alphabet = this.alphabet, key = this.key,
    returnFunction = function(charVal, arrayIndex)
      {
        let returnVal = alphabet.indexOf(charVal) -
          alphabet.indexOf(key[arrayIndex % key.length]);
        returnVal = returnVal >= 0 ? returnVal : alphabet.length + returnVal;

        return alphabet[returnVal];
      };
    return this.ncode(cipherText, returnFunction);
  }

  Cipher.prototype.ncode = function(cipherText, mapFunction) {
    return cipherText.split("")
    .map(mapFunction)
    .join("");
  }

module.exports = Cipher;
