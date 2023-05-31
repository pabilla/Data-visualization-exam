function twoSum(array, target) {
    const arrayMap = new Map();
    for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;

    if (arrayMap.has(complement)) {
      const complementIndex = arrayMap.get(complement);
      return [complementIndex, i];
    }
    arrayMap.set(num, i);
  }
  return [];
}

const nums = [2,7,11,15];
const target = 9;

console.log(twoSum(nums,target));