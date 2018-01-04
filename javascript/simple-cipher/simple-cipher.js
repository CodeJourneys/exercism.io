var Cipher = function(cipherKey)
  {
    let keyLen = 200;

    this.alphabet =
    [
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
    return this.ncrypt(cipherText, true);
  };

  Cipher.prototype.decode = function(cipherText) {
    return this.ncrypt(cipherText, false);
  }

  Cipher.prototype.ncrypt = function(cipherText, encode)
  {
    let alphabet = this.alphabet,
      key = this.key,
      modifier = !encode ? -1 : 1;

    return cipherText.split("")
    .map(function(charVal, arrayIndex)
    {
      return alphabet[(alphabet.indexOf(charVal) +
        ( alphabet.indexOf( key[arrayIndex % key.length] ) * modifier)) % alphabet.length];
    })
    .join("");
  }

module.exports = Cipher;
