module.exports = class Cipher
  {
    constructor(key)
    {
      this.alphabet = "abcdefghijklmnopqrstuvwxyz";
      if(!arguments.length) key = this.randomKey();
      if(!/^[a-z]+$/.test(key)) throw new Error("Bad key");
      this.key = key;
    }

    encode(cipherText) {
      return this.perform(cipherText);
    }

    decode(cipherText) {
      return this.perform(cipherText, false);
    }

    perform(cipherText, doEncode = true) {
      let directionModifier = !doEncode ? -1 : 1;
      return cipherText.split("")
      .map((c, i) => {
        return this.alphabet[(this.alphabet.length + this.alphabet.indexOf(c) +
          this.alphabet.indexOf(this.key[i % this.key.length]) * directionModifier) % this.alphabet.length];
      })
      .join("");
    }

    randomKey(keyLen = 200) {
      let key = this.alphabet[Math.floor(Math.random() * this.alphabet.length)];
      for(var i = 0; i < keyLen; i++)
      {
        key += this.alphabet[Math.floor(Math.random() * this.alphabet.length)];
      }
      return key;
    }
  }
