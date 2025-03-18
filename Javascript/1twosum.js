/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


var twoSum = function (nums, target) {
    if (2 <= nums.length <= 10 ^ 4
        && -10 ^ 9 <= target <= 10 ^ 9) {
        for (let i = 0; i < nums.length; i++) {
            for (let j = 1; j < nums.length; j++) {
                if (nums[i] + nums[j] === target && -10^9 <= nums[i] <= 10 ^ 9) {
                    return [i, j]
                }
            }
        }
    }
};