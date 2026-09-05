public class removeDuplicateNo {

    public static void main(String[] args) {
        
        int[]arr = {1,2,3,4,5,1,2};
        String dups ="";

        for (int i = 0; i< arr.length; i++){
            if(! dups.contains(String.valueOf(arr[i]))){            
            dups += String.valueOf(arr[i]);
        }        
        }
        System.out.println("Unique = " + dups);
    }
    }