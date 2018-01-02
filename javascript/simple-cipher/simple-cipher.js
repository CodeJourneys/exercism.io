var Cipher = function(cipherKey)
  {
    const alphabet =
    [
      "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
      "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ];

    if(!arguments.length) {
      for(var i = 0; i < 200; i++)
      {
        this.key += alphabet[Math.floor(Math.random() * 25)];
      }
    }
    else {
      if(!/[a-z]+/.test(cipherKey)) throw new Error("Bad key");
      this.key = cipherKey;
    }
  };

module.exports = Cipher;
