using System;
using System.Collections.Generic;
using System.Linq;

public class NucleotideCount
{
    public NucleotideCount(string sequence)
    {
      NucleotideCounts = new Dictionary<char, int> {
        ['A'] = sequence.Count(c => c == 'A'),
        ['C'] = sequence.Count(c => c == 'C'),
        ['G'] = sequence.Count(c => c == 'G'),
        ['T'] = sequence.Count(c => c == 'T')
      };
      if(NucleotideCounts.Values.Sum() != sequence.Length) throw new InvalidNucleotideException();
    }

    public IDictionary<char, int> NucleotideCounts
    { get; private set; }
}

public class InvalidNucleotideException : Exception { }
