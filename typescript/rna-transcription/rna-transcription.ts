export default class Transcriptor {
    toRna( dna: string ): string {
        const dnaToRna: { [key: string]: string} = {
          G: 'C', C: 'G', T: 'A', A: 'U'
        }
        return dna.toUpperCase().split('')
          .map((c) => {
            if (dnaToRna[c] === undefined) throw new Error("Invalid input DNA.");
            return dnaToRna[c];
          }).join('');
    }
}
