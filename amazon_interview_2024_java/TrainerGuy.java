import java.util.ArrayList;
import java.util.Arrays;

public class TrainerGuy {
    public int[] generate(int[] arr) {
        ArrayList<Integer> list = new ArrayList<>();
        for (int i = 0; i < arr.length; i++) {
            list.add(arr[i]);
        }

        int[] nums2 = list.stream().mapToInt(i -> i).toArray();

        System.out.println(Arrays.toString(nums2));

        return nums2; // Return the processed array
    }

    public static void main(String[] args) { // Corrected main method signature
        TrainerGuy item = new TrainerGuy();

        item.generate(new int[]{5, 4, 3, 2, 1});
    }
}