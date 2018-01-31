export default class Bob {
    hey( str: string ): string {
      str = str.trim()
      const isYelling = /[A-Z]+/.test(str) && str.toUpperCase() === str,
            isQuestion = str.substr(str.length - 1) === "?",
            isSilence = str === ''
      if (isYelling) {
        if (isQuestion) return "Calm down, I know what I'm doing!"
        return "Whoa, chill out!"
      }
      if (isQuestion) return "Sure."
      if (isSilence) return "Fine. Be that way!"
        return "Whatever."
    }
}
