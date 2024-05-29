// 69. Sqrt(x)

// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

//this is my code and worst runtime ever
// var mySqrt = function (x) {
//   for (let i = 1; i <= x; i++) {
//     if (i * i > x) return i - 1;
//   }
//   return x;
// };

// efficient way


// i got this from a youtube video 
var mySqrt = function (x) {
  if (x <= 1) return x;
  for (let i = 2; i <= x; i++) {
    if (i * i === x) return x;
    if (i * i > x) return x - 1;
  }
};
