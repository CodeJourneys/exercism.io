module.exports = class Bob {
  constructor() {}

  hey(str) {
    str = str.trim();
    const isSilence = str === '',
      isYelling = /[A-Z]+/.test(str) && str.toUpperCase() === str,
      isQuestion = str.substring(str.length - 1) === "?";
    if(isYelling) {
      if(isQuestion) return "Calm down, I know what I'm doing!";
      return "Whoa, chill out!";
    }
    if(isQuestion) return "Sure.";
    if(isSilence) return "Fine. Be that way!";
    return "Whatever.";
  }
}
