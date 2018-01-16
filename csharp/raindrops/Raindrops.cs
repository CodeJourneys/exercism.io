using System;

public static class Raindrops
{
    public static string Convert(int number)
    {
      string result = number % 3 == 0 ? "Pling" : "";
      if(number % 5 == 0) result += "Plang";
      if(number % 7 == 0) result += "Plong";
      return result == "" ? number.ToString() : result;
    }
}
