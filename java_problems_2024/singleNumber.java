package java_problems_2024;

public int singleNumber(int[] nums) {
    int result = 0;

    for (int i = 0; i < nums.length; i++) {
        result ^= nums[i];
    }
    
    return result;
}
