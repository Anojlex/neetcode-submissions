class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const indexMap=new Map()
       for(let i=0;i<nums.length;i++){
       const requiredNum=target-nums[i]
       if(indexMap.has(requiredNum)){
return[i,indexMap.get(requiredNum)]
       }else{
        indexMap.set(nums[i],i)
       }
       }
    }
}
