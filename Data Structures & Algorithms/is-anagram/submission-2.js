class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
       
      if (s.length!==t.length)return false;

           const count={};
           for(const n of s){
            count[n]=(count[n]||0)+1
           }
          for(const n of t){
            count[n]=(count[n]||0)-1
           }
      for(const n of Object.values(count))  {
        if (n!==0)return false
    }     
    return true
      
        
    }
}
