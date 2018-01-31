export default class Bob {
    hey( dialog: string ): string {
      dialog = dialog.trim()
      const isYelling: boolean = dialog.toLowerCase() !== dialog.toUpperCase() &&
                                 dialog.toUpperCase() === dialog,
            isQuestion: boolean = dialog.substr(dialog.length - 1) === "?",
            isSilence: boolean = dialog === ''
      if (isYelling) {
        if (isQuestion) return "Calm down, I know what I'm doing!"
        return "Whoa, chill out!"
      }
      if (isQuestion) return "Sure."
      if (isSilence) return "Fine. Be that way!"
        return "Whatever."
    }
}
