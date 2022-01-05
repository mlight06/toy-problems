/**
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.


Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.


Constraints:

-2^31 <= x <= 2^31 - 1


Follow up: Could you solve it without converting the integer to a string?
 */

var isPalindrome = function(x) {
  var string = x.toString();
  let first = string[0];
  let last = string[string.length - 1];
  let result = false;
  if (string.length < 2) {
      result = true;
      return result
  }
   if (string.length === 2) {
         if (string[0] === string[1]) {
             return result = true;
         } else {
             return result
         }
      }
  if (first === last) {
      string = string.slice(1, string.length - 1);
     return isPalindrome(string);
  } else {
      return result
  }


};