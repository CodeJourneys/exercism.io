module.exports = class Pangram {
  constructor(str) {
    this.str = str;
  }

  isPangram() {
    let str = this.str.toLowerCase();
    return [...'abcdefghijklmnopqrstuvwxyz']
    .filter(function(c) { return str.indexOf(c) < 0; })
    .length === 0;
  }
}
