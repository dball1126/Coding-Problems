import java.math.BigInteger;

public class DivideTwoIntegers {
    public static void main(String[] args) {
        // -2147483648
        // -1
        System.out.println(divide((int)-2147483648, (int)-1));
    }

    public static int divide(int dividend, int divisor) {
        BigInteger bigDividend = BigInteger.valueOf(dividend);
        BigInteger bigDivisor = BigInteger.valueOf(divisor);
        long newDivisor = (long)divisor;
        BigInteger newBig = BigInteger.valueOf(newDivisor);
        int count = 0;
        boolean modifiedOnce = false;
        boolean modifiedTwice = false;
        int newNum;
        if (0 < 1) {
            System.out.println("true");
            System.out.println(dividend);
            newNum = Math.abs(dividend);
            System.out.println(newNum);
            System.out.println(newNum);
            modifiedOnce = true;
        }

        if (divisor < 0) {
            divisor = Math.abs(divisor);
            if (modifiedOnce) modifiedTwice = true;
            modifiedOnce = true;
        }
        // System.out.println(dividend);
        // System.out.println(divisor);

        while (dividend >= divisor){
            if (modifiedOnce && !modifiedTwice) {
                count--;
            } else{
                count++;
            }
        
            dividend -= divisor;
        }
        return count;
    }
}