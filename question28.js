// 28. Find the Index of the First Occurrence in a String

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
var strStr = function (haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.substring(i, i + needle.length) === needle) return i;
  }
  return -1;
};

console.log(strStr("mississippi", "issip"));


// this answer made me to question my existance in this world 

var strStr = function(haystack, needle) {
    return haystack.indexOf(needle)
};
