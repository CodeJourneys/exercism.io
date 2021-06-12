export class ResistorColor {
  private colors: string[]
  private colorLookup: {[index: string]: number} = {
    black: 0, 
    brown: 1, 
    red: 2, 
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9
  };

  private parseColors(): number {
    let firstColor: string = this.colors[0],
        secondColor: string = this.colors[1];

    return this.colorLookup[firstColor] * 10 + this.colorLookup[secondColor];
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
