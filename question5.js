// Given a string s, return the longest
// palindromic

// substring
//  in s.

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

var longestPalindrome = function (s) {
  let longest = "";
  function isPalindrom(value, right, left) {
    let left = 0;
    let right = s.length - 1;

    while (right < value.length && left >= 0 && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.slice(left + 1, right);
  }

  for (let i = 0; i < s.length; i++) {
    let odd = isPalindrom(s, i, i);
    let even = isPalindrom(s, i, i + 1);

    let highPalindrome = odd.length > even.length ? odd : even;
    if (highPalindrome.length > longest.length) longest = highPalindrome;
  }
  return longest;
};

