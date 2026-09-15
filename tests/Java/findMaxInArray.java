// This program finds the maximum and minimum values in an array.

public class findMaxInArray {
    public static void main(String[] args) {
        int []arr = {1,2,3,4,5};
        int max = arr[0];
        int min = arr[0];

        for(int i=0;i<arr.length; i++){
            if(arr[i] > max){
                max = arr[i];
            }

            if(arr[i] < min){
                min = arr[i];
            }
        }
        System.out.println("Max no. = " + max);
        System.out.println("Min no. = " + min);
    }
    
}