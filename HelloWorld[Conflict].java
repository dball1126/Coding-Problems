import java.util.HashSet;
import java.util.Set;

class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World");

        String test = "test";
        Character charLetter = test.charAt(0);
        String letter = charLetter.toString();
        System.out.println(test.indexOf("z"));
        HashSet newHashSet = new HashSet();
        String str = test.substring(0, 0);
        newHashSet.add("g");
        System.out.println(newHashSet.contains("g"));
        System.out.println(str);
    }
}