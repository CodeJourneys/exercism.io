var TwoFer = function () {};

TwoFer.prototype.twoFer = function (who) {
  // your code goes here
  // You will have to use the parameter who
  // in some way. In this example, it is just
  // returned, but your solution will have to
  // use a conditional.
  who = (!who ? "you" : who);
  return "One for " + who + ", one for me.";
};

module.exports = TwoFer;
