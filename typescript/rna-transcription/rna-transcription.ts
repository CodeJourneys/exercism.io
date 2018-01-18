export default class Transcriptor {
    toRna( dna: string ): string {
        return dna.toUpperCase().split('')
          .map((c) => {
            switch (c) {
              case 'G':
                return 'C';
              case 'C':
                return 'G';
              case 'T':
                return 'A';
              case 'A':
                return 'U';
              default:
                throw new Error("Invalid input DNA.");
            }
          }).join('');
    }
}
