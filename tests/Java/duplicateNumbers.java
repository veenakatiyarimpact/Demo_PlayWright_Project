public class duplicateNumbers {
    public static void findDuplicates(int no){

        String num = String.valueOf(no);
        String dups = "";

        for (int i = 0; i<num.length();i++ ){
            for(int j = i+1; j<num.length(); j++){
                if(num.charAt(i) == num.charAt(j)){
                    if(! dups.contains(String.valueOf(num.charAt(i)))){
                        dups += num.charAt(i);
                        dups+= " , ";
                    }
                }
            }
        }
        System.out.println("Duplicates => " + dups);        
    }

    public static void main(String []a){
        duplicateNumbers.findDuplicates(12354552);
        duplicateNumbers.findDuplicates(12345);
    }    
}
