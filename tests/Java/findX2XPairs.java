// This program finds array pairs where one number is twice the other.

public class findX2XPairs {

     public static void main(String[] args) {

        int[]arr = {1,4,2,3,5,6,0,9,10,7,8};
        String dups = "";

        for(int i=0; i< arr.length;i++){
             int ch = arr[i];

            if(! dups.contains(String.valueOf(ch))){
                dups += ch;               
            for(int j = 0; j<arr.length; j++){
                if(i != j){
                    if(arr[i] == 2*arr[j]){
                        System.out.println(" (" + arr[i] + " , " + "2 * " + arr[j] + " )");
                        break;
                    }
                }
            }
        }
        }
    }       
}
