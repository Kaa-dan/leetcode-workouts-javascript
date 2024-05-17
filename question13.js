// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

var romanToInd = function (s) {
  const symbols = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    let curr = symbols[s[i]];
    let next = symbols[s[i + 1]];
    if (next && curr <next) {
      let n = next - curr;
      sum += n;
      i++;
    } else {
      
      sum += curr;
    }
  }
  return sum;
};

console.log(romanToInd("III"));

// var romanToInt = function (s) {

//     const symbols = { "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000 };
//     let sum = 0;

//     for (let i = 0; i < s.length; i++) {
//         let curr = symbols[s[i]];
//         let next = symbols[s[i + 1]];

//         if (next && curr < next) {
//             sum -= curr;
//         } else {
//             sum += curr;
//         }
//     }

//     console.log(sum);
//     return sum;

// };
