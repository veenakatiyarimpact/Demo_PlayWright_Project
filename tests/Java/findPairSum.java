public class findPairSum {

    public static void main(String[] args) {
        int sum = 5;
        int[]arr = {1,4,2,3,5,6,0,9,10,7,8};

        for(int i=0; i< arr.length;i++){
            for(int j = 0; j<arr.length; j++){
                if(i != j){
                    if(arr[i] + arr[j] == sum){
                        System.out.println(arr[i] + " + " + arr[j] + " = " + sum);
                    }
                }
            }
        }
    }    
}
