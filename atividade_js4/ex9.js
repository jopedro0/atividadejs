var nums = [5, 30, 44, 27, 32, 50 , 21, 20, 36, 74, 80, 88, 45, 31, 20, 12, 66, 73, 64, 9, 90, 5]

var count = 0

for (let i = 0; i < nums.length; i++) {
    
    var mults = nums[i] % 5 

    if (mults == 0) {
        count++
    }

}

console.log(count)