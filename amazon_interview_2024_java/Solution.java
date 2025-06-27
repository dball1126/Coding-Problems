import java.util.Arrays;
import java.util.Collections;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.Iterator;
import java.util.stream.IntStream;
import java.util.List;
import java.util.LinkedList;

public class Solution {

    public int[] generate(int[] nums) {
        int[] arr = new int[5];

        ArrayList<Integer> list = new ArrayList<>();

      for (int i = 0; i < nums.length; i++) {
        list.add(nums[i]);
      }

      Collections.sort(list, (a,b)-> b.compareTo(a));
      int[] result = list.stream().mapToInt(i -> i).toArray();
      System.out.println(Arrays.toString(result));
        return arr;
    }
       

    public static void main(String[] args) throws Exception {
        Solution sol = new Solution();
        sol.generate(new int[]{1,2,3,4,5});
    }
}

// int[] arr2 = {1, 2, 3, 4, 5};
// List<int[]> list = Arrays.asList(nums);
//         Collections.sort(list, (a,b) -> Arrays.compare(b, a));
//         int[] result = list.stream() // Stream<int[]>
//         .flatMapToInt(Arrays::stream) // IntStream
//         .toArray();
//         System.out.println(Arrays.toString(result));
// // To boxed list


// REVERSE in[] array and convert to Integer ****************************
// Integer[] theInts = new Integer[nums.length];

// for (int i = 0; i < nums.length; i++) {
//     theInts[i] = nums[i];
// }

// Arrays.sort(theInts, (a,b)-> b.compareTo((a)));

// int[] arr2 = Arrays.stream(theInts).mapToInt(i -> i).toArray();

// System.out.println(Arrays.toString(arr2));

// Character codes 
// for(int i = 0; i < str.length(); i++) {
//     String abc = "a";
//     System.out.println(str.codePointAt(i) - abc.codePointAt(0));
// }

// ArrayList String sorting and characer codes ********************

// String str = "zabcdefg";
    
// String[] parts = str.split(" ");

// String result = String.join("*", parts);

// ArrayList<Character> chars = new ArrayList<>();
// for (int i = 0; i < str.length(); i++) {
//     chars.add(str.charAt(i));
// }
// Collections.sort(chars);
// Collections.reverse(chars);

// Collections.sort(chars, new Comparator<Character>() {
//     @Override
//     public int compare(Character o1, Character o2) {
//         int code1 = o1.charValue() % 3;
//         int code2 = o2.charValue() % 3;

//         System.out.println(o1 +":" + code1);
//         System.out.println(o2 +":" + code2);

//         if (code1 > code2) {
//             return 1;
//         } else if ( code1 < code2) {
//             return -1;
//         } else {
//             return 0;
//         }
//     }
// });

// System.out.println(chars);

// how to traverse a linked list and use it *****************************
// LinkedList<String> list = new LinkedList<>();
// list.add("apple");
// list.add("banana");
// list.add("berry");

// Node nde = new Node(1);
// Node nde2 = new Node(2);
// Node nde3 = new Node(3);
// nde.next = nde2;
// nde2.next = nde3;

// // while (list != null) {
// //     System.out.println(list);
// //     nde = nde.next;
// // }

// LinkedList<Node> list2 = new LinkedList<>();
// // Add elements to the list
// list2.add(nde);
// list2.add(nde2);
// list2.add(nde3);
// Iterator<Node> iterator = list2.iterator();
// while (iterator.hasNext()) {
//     Node n = iterator.next();

//     System.out.println(n.val);
// }
// return arr;
// }

// private static class Node {
// int val;
// Node next;
// private Node (int value) {
//     this.val = value;
//     this.next = null;
// }
// }