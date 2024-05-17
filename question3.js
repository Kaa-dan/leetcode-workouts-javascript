// Given a string s, find the length of the longest
// substring
//  without repeating characters.


// this is my way of doing this  using two pointer method


// var lengthOfLongestSubstring = function (str) {
//   let longest = 0;
//   let left = 0;
//   let right = 0;
//   let set = new Set();

//   while (right < str.length) {
//     if (set.has(str[right])) {
//       set.delete(str[left]);
//       left++;
//     } else {
//       set.add(str[right]);
//       right++;
//       longest = Math.max(set.size, longest);
//     }
//   }
//   return longest;
// };


// // Input: s = "bbbbb"
// // Output: 1

// console.log(lengthOfLongestSubstring("bbbbb"))


// i got this from leetcode 

var lengthOfLongestSubstring = function(s) {

    let i = 0;

    let res = 0;

    const map = new Map();

    for (let j=0;j<s.length;j++) {
        
        const index = map.get(s[j]);

        if(index !== undefined && index >= i) {

            i = index + 1;

        }

        res = Math.max(res, j-i+1);

        map.set(s[j], j);
    }
    
    return res;
};