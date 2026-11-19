class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const emptySet=new Set();
        for(let i=0;i<nums.length;i++){
            if(emptySet.has(nums[i])){
                return true;
            }else{
                emptySet.add(nums[i]);
            }
        }
        return false;

    }
}
