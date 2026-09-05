public class sortArray {
    public static void main(String[] args) {
        int[]arr = {10,9,2,8,7,1,4,2,3,6,4};

        for (int i=0;i<arr.length;i++){
            for (int j=i+1; j<arr.length;j++){
                if(arr[i]>arr[j]){
                    int temp = arr[i];
                    arr[i] = arr[j];
                    arr[j]=temp;
                }
            }
        }
       
        for (int i=0;i<arr.length;i++){
            System.out.println(arr[i]);
        }
    }
}
