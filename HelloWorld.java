import java.lang.reflect.Array;
import java.util.*;

class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World");

        String test = "test";
        Character charLetter = test.charAt(0);
        String letter = charLetter.toString();
        System.out.println(test.indexOf("z"));
        String chars = "the sky is blue";
        
        char[] s = chars.toCharArray();
        String newString = s.toString();
        Array.setChar(s, 0, 'p');
        System.out.println(s);
    }
}