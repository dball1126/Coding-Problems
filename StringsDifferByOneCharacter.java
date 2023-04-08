import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

// 1554. Strings Differ by One Character
// Medium

// 55

// 1

// Add to List

// Share
// Given a list of strings dict where all the strings are of the same length.

// Return True if there are 2 strings that only differ by 1 character in the same index, otherwise return False.

// Follow up: Could you solve this problem in O(n*m) where n is the length of dict and m is the length of each string.

public class StringsDifferByOneCharacter {

    public static void main(String[] args) {
        String[] words = {"ab","cd","yz"};
        
        System.out.println(differByOne(words));
    }

    public static boolean differByOne(String[] dict) {
        
        HashSet set = new HashSet();
        
        for (int i = 0; i < dict.length; i++) {
            String wordL = dict[i];
            for (int j = 0; j < wordL.length(); j++) {
                
                String first = wordL.substring(0, j);
                String last = wordL.substring(j+1, wordL.length());
                String modified = first + "*" + last;
                
                if (set.contains(modified)) return true;
                set.add(modified);
            }
        }
        return false;
    }
}
// use hash map of alphabet leter is the key, position is value "abcdef...."
// use hash map, key is the index, value comes from the alphabet hash
// use a count for += 1 when a word differs by more than one character
// reeturn true if count === 2 else return false