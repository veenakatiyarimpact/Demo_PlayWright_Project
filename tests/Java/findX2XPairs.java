public class findX2XPairs {

     public static void main(String[] args) {
        int twoX = 10;
        int[]arr = {1,4,2,3,5,6,0,9,10,7,8};

        for(int i=0; i< arr.length;i++){
            for(int j = 0; j<arr.length; j++){
                if(i != j){
                    if(arr[i] == 2*arr[j]){
                        System.out.println(" (" + arr[i] + " , " + "2 * " + arr[j] + " )");
                    }
                }
            }
        }
    }       
}
