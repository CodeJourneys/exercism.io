module.exports = class Pangram {
  constructor(str) {
    this.str = str;
  }

  isPangram() {
    return new Set([...this.str.toLowerCase()]
      .filter(function(c) { return c.match(/^[a-z]$/); }))
      .size === 26;
  }
}
