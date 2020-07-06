//Objective is to find the longest increasing subsequence in an array.

let nums = [10,9,2,5,3,7,101,18]


//O(n^2) solution that uses dynamic programming to figure out if we want the 
//element in the subsequence or not.

if (nums.length == 0) {
    return 0
}

//Every element initially starts with a subsequence of length 1
let dp = new Array(nums.length).fill(1)

//Use a nested iterator to compare all pairs of elements in the array
for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
        //If nums[i] = 5 && nums[j] = 2, then we can choose to add
        //the previous subsequence to the current one
        if (nums[i] > nums[j]) {
            dp[i] = Math.max(dp[i], dp[j] + 1)    
        }
    }
}

return Math.max(...dp)