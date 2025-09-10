// // two sum problem
// nums[3,8,9,2,5], target =5
// function twoSum(nums, target) {
//     for (var i=0; i<= num.length-2; i++){
//         for (var j=i+1; j<= num.length-1; j++){
//             if(nums[i]+nums[j]==target){
//                 return [i,j];
//             }
//         }
//     }

function twoSumwithMap(nums, target) {
    var map = new Map();
    for (var i = 0; i < nums.length-1; i++) {
        var complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}