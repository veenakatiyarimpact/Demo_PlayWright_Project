// Find all duplicate characters in a string

public class duplicateChars {
    
    public void findDups(String str){
        String dups = "";

        for (int i = 0; i< str.length();i++){
            char ch =  str.charAt(i);

            if(! dups.contains(String.valueOf(ch))){
                for (int j = i+1; j< str.length(); j++){
                    char ch1 = str.charAt(j);

                    if(ch==ch1){                        
                        dups += ch1;     
                        break;                   
                    }
                }
            }
        }
        System.out.println("Duplicate chars : " + dups);
    }

    public static void main(String [] a){
        duplicateChars obj1 = new duplicateChars();
        obj1.findDups("Veena KatiyarK");
        obj1.findDups("Mayuresh");
    }
    
}
