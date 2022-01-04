// BRUTE FORCE

var isPalindrome = function(x) {
  // check if x is negative
  // check if x's last digit is 0, and x does not equal 0
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    // return false
    return false;
  }
  // turn value into a string
  var xString = x.toString();
  // iterate through string, but only to the mid point
  for (var i = 0; i < xString.length/2; i ++) {
    // compare current element with length - current index's element
    if (xString[i] !== xString[xString.length - i - 1]) {
      // if current element does not match return false
      return false;
    }
  }
  // if the code makes it here, it is a palindrome
  return true;
};

// WITHOUT TURNING X INTO A STRING
var isPalindrome = function(x) {
  // check if x is negative
  // check if x's last digit is 0, and x does not equal 0
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    // return false
    return false;
  }
  // define a variable to store the value of x reversed
  var reverse = 0;
  // define a temporary x value to use to reverse it
  var tempX = x;
  // do while loop until tempX = 0
  do {
    // take the last value of tempX and add it to reverse
    reverse = reverse * 10 + tempX % 10;
    // remove the last value from tempX
    tempX = Math.round(tempX/10);
  } while (tempX > 0)
  // return true if x is equal to reverse
  return x === reverse
}