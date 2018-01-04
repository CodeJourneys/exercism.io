var Cipher = function(cipherKey)
  {
    this.alphabet =
    [
      "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
      "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ];

    if(!arguments.length) {
      this.key = this.alphabet[Math.floor(Math.random() * 25)];
      for(var i = 0; i < 200; i++)
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
    return this.crypt(cipherText, true);
  };

  Cipher.prototype.decode = function(cipherText) {
    return this.crypt(cipherText, false);
  }

  Cipher.prototype.crypt = function(cipherText, encode)
  {
    let alphabet = this.alphabet,
      key = this.key,
      modifier = encode ? 1 : -1;

    return cipherText.split("")
    .map(function(charVal, arrayIndex)
    {
      return alphabet[alphabet.indexOf(charVal) +
        (alphabet.indexOf(key[arrayIndex%key.length]) * modifier)];
    })
    .join("");
  }

module.exports = Cipher;
