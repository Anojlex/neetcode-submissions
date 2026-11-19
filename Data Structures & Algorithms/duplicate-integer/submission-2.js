class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const emptySet=new Set();
        for(const n of nums){
            if(emptySet.has(n)){
                return true;
            }else{
                emptySet.add(n);
            }
        }
        return false;

    }
}
