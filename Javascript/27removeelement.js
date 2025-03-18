/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let r = nums.filter((number) => number != val);
    for(let i = 0; i < r.length; i++){
        nums[i] = r[i];
    }
    return r.length
};