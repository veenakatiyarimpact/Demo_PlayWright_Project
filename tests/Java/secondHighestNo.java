// This program finds the highest and second-highest numbers in an array.

public class secondHighestNo {

    public static void main(String[] args) {
        
        int []arr={1,2,3,4,5,10,100,23};

        int max = arr[0];
        int highest2 = arr[0];

        for(int i = 0; i<arr.length; i++){
            if(arr[i] > max){
                max = arr[i];
            }

            if(arr[i] > highest2 && arr[i] < max){
                highest2 = arr[i];
            }
        }
        System.out.println("First highest = " + max);
        System.out.println("Second highest = " + highest2);
    }
    
}
