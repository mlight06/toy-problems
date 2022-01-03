// BRUTE FORCE
// time complexity = O(n^2)
// space complexity = O(1)
var twoSum = function(nums, target) {
  // iterate through numbers array
  for (var i = 0; i < nums.length; i++) {
    // for each element, iterate through the following elements
    for (var j = i + 1; j < nums.length; j++) {
      // check if element at i + element at j equal the target
      if (nums[i] + nums[j] === target) {
        // return both indexes
        return [i, j];
      }
    }
  }
  // if no pair exists, return null
  return null;
};

// TWO-PASS MAP
// time complexity = O(n)
// space complexity = O(n)
var twoSum = function(nums, target) {
  // declare object variable to store the number, and its index
  var numsObject = {};
  // iterate through nums
  for (var i = 0; i < nums.length; i ++) {
    // add each number and its index to the object
    numsObject[nums[i]] = i;
  }
  // iterate through numbers again
  for (var i = 0; i < nums.length; i ++) {
    // declare complement variable - the other number needed to reach the target
    let complement = target - nums[i]
    // check if the complement exists in the object
    if (numsObject[complement]) {
      // if it exists, return both indexes
      return [i, numsObject[complement]];
    }
  }
  // if no pair exists, return null
  return null;
}

// ONE-PASS MAP
// time complexity = O(n)
// space complexity = O(n)
var twoSum = function(nums, target) {
  // declare object variable to store number and its index
  var numsObject={};
  // iterate through nums
  for (var i = 0; i < nums.length; i ++) {
    // put number, and its index in object
    numsObject[nums[i]] = i
    // calculate the complement for the target value
    let complement = target - nums[i];
    // check if the complement exists in the object
    if (numsObject[complement] !== undefined) {
      // return the pair summing to the target
      return [i, numsObject[complement]]
    }
  }
  // if there is no pair, return null
  return null
}