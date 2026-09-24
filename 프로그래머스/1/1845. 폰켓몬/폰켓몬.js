function solution(nums) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++ ) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }
    const n = nums.length/2;
    
    if (n < map.size) return n;
    else return map.size;
}

