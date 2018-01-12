using System.Collections.Generic;
using System.Linq;

public static class SumOfMultiples
{
    public static int Sum(IEnumerable<int> multiples, int max)
    {
      return multiples
        .SelectMany(x => Enumerable.Range(1, max / x), (x, i) => x * i)
        .Where(x => x < max).Distinct().Sum();
    }
}
