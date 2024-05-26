// 58. Length of Last Word
// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal
// substring
//  consisting of non-space characters only.

// Input: s = "   fly me   to   the moon  "
// Output: 4
function lengthOfLastWord(s) {
  let count = 0;
  let word = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == " ") {
      if (word > 1) count = word;

      word = 0;
    } else word++;
  }
  if (word > 1) count = word;
  return count;
}

console.log(lengthOfLastWord("   fly me   to   the moon  "))

//this from leetcode 

function lengthOfLastWord(s) {
    s = s.trimEnd();
    return s.length - s.lastIndexOf(' ') - 1;
};