using System;
using System.Text.RegularExpressions;

public static class Bob
{
    public static string Response(string statement)
    {
      bool isSilence = !Regex.IsMatch(statement, @"[A-Za-z0-9?]+") || statement == String.Empty;
      bool isYelling = statement.ToUpper() == statement && Regex.IsMatch(statement, @"[A-Z]+");
      bool isQuestion = statement.Trim().EndsWith("?");

      if(isSilence)
        return "Fine. Be that way!";
      if(isYelling)
      {
        if(isQuestion) return "Calm down, I know what I'm doing!";
        return "Whoa, chill out!";
      }
      if(isQuestion)
        return "Sure.";
      return "Whatever.";
    }
}
