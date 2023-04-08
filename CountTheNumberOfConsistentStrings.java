import java.util.HashSet;

public class CountTheNumberOfConsistentStrings {

    public static void main(String[] args) {
        String allowed = "cad";
        String[] words = new String[]{"cc","acd","b","ba","bac","bad","ac","d"};

        System.out.println(countConsistentStrings(allowed, words));
    }

    public static int countConsistentStrings(String allowed, String[] words) {
        int count = 0;

        HashSet set = new HashSet();
        for (int i = 0; i < allowed.length(); i++) {
            Character charLetter = allowed.charAt((i));
            set.add(charLetter);
        }

        for (int i = 0; i < words.length; i++) {
            String word = words[i];
            boolean flag = true;

            for (int j = 0; j < word.length(); j++) {
                Character charLetter = word.charAt(j);
                
                if (!set.contains(charLetter)) {
                    flag = false;
                    break;
                };
            }

            if (flag) count ++;
            flag = false;
        }

        return count;
    }
}
