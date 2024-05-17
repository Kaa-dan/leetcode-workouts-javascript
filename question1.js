// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// this answer is o(n2)

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {

        if(nums[i]+nums[j]===target){
            return [i,j]
        }

    }
  }
};


// this is one of the efficient way to solve this 

var twosum = function (nums, target) {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    let value = nums[i];
    let isValue = target - value

    if (obj[isValue] !== undefined) return [obj[isValue], i];

    if (!obj[value]) obj[value] = i;
  }
};

console.log(twosum([3, 3], 6));


// we can use map also with same logic i got this from leetcode

var twosum = function(nums,target){
    let map = new Map()
    for(let i=0; ;i++){
        let value = nums[i]
        let value2 = target-value;
        if(map.has(value2)){
            returnValue = [map.get(value2),i]

            return returnValue
        }
        map.set(value2,i)
    }
}
