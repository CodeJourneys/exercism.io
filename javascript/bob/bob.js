module.exports = class Bob {
  constructor() {}

  hey(str) {
    str = str.trim();
    if(/[A-Z]+/.test(str) && str.toUpperCase() === str) return "Whoa, chill out!";
    if(str.substring(str.length - 1) === "?") return "Sure.";
    if(str === '') return "Fine. Be that way!";
    return "Whatever.";
  }
}
