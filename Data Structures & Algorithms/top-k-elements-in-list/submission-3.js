class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count={}
        for(const n of nums){
            if(!count[n]){
                count[n]=1
            }else{
                count[n]=count[n]+1
            }
        }
        const entries=Object.entries(count);
      const sorted = entries.sort((a,b)=>b[1]-a[1])
      return sorted.slice(0,k).map((arr)=>Number(arr[0]))

}
}