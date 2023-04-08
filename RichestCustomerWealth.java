import java.util.stream.IntStream;

class RichestCustomerWealth {
    public static void main(String[] args) {
        int[] one = {2,8,7};
        int[] two = {7,1,3};
        int[] three = {1,9,5};

        int[][] array = {one, two, three};

        System.out.println(maximumWealth(array));
    }

    public static int maximumWealth(int[][] accounts) {
        int sum = 0;
        for (int i = 0; i < accounts.length; i++) {
            int newSum = IntStream.of(accounts[i]).sum();
            if (sum < newSum) sum = newSum;
        }
        return sum;
    }
}