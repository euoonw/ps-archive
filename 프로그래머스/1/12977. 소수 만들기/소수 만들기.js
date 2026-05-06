function solution(nums) {
    var answer = 0;
    
    for(let n1=0; n1<nums.length-2; n1++){
        for(let n2 = n1+1; n2<nums.length-1; n2++){
            for(let n3 = n2+1; n3<nums.length; n3++){
                const r = nums[n1]+nums[n2]+nums[n3];
                let i;
                for (i=2; i<r; i++){
                    if (r%i===0){
                        break;
                    }
                }
                if(i===r){
                    answer++;
                }
            }
        }
    }
    
    return answer;
}