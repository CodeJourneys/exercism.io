export class ResistorColor {
  private colors: string[]

  private getNumberAsStringFromColor(color: string): number {
    switch(color) {
      case "brown":
        return 1;
      case "red":
        return 2;
      case "orange":
        return 3;
      case "yellow":
        return 4;
      case "green":
        return 5;
      case "blue":
        return 6;
      case "violet":
        return 7;
      case "grey":
        return 8;
      case "white":
        return 9;
      case "black":
      default:
        return 0;
    }
  }

  private parseColors(): number {
    return this.getNumberAsStringFromColor(this.colors[0]) * 10 + this.getNumberAsStringFromColor(this.colors[1]);
  }

  constructor(colors: string[]) {
    if(!colors ||
      !colors.length ||
      colors.length < 2) {
        throw new Error("At least two colors need to be present");
      }

    this.colors = colors
  }
  value = (): number => this.parseColors();
}
