public class missingNo {

    public static void findMissingNo(int[] arr) {
        int original = 0;
        int expected = 0;

        System.out.println("Array length = " + arr.length);

        for (int i = 0; i<arr.length; i++){
            original += arr[i];
        }

        for (int i = 1; i<=arr.length +1; i++){
            expected += i;
        }
        System.out.println("Original = " + original + " : Expected = " + expected);

        int missing = expected - original;
        System.out.println("Missing no. = " + missing);        
    }

    public static void main(String[] args) {
        int[]arr = {1,2,3,4};
        missingNo.findMissingNo(arr);

        int []arr1 = {1,3,4,5,6};
        missingNo.findMissingNo(arr1);    
}
}
