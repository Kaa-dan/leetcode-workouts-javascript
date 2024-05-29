// 70. Climbing Stairs

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

//example for dynamic porgramming
var climbStairs = function (n) {
  let dp = [];
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
console.log(climbStairs(5));
// 4 = 1,2,1  2,1,1  1,1,2  1,1,1,1  2,2
