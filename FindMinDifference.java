import java.util.*;

public class FindMinDifference {
    public static void main(String[] args){

    }

    public int findMinDifference(List<String> timePoints) {
        int diff = 99999;
        for (int i = 0; i < timePoints.size()-1; i++) {
            String time1 = timePoints.get(i);

            for (int j = 1; j < timePoints.size(); j++) {
                String time2 = timePoints.get(j);

            }
        }
        return diff;
    }
}


// max it can be is 12:00  720