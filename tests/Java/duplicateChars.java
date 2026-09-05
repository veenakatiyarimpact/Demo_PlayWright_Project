public class duplicateChars {
    
    public void findDups(String str){
        String dups = "";

        for (int i = 0; i< str.length();i++){
            String ch = String.valueOf( str.charAt(i));
            for (int j = i+1; j< str.length(); j++){
                String ch1 = String.valueOf(str.charAt(j));

                if(ch.equals(ch1)){
                    if(! dups.contains(ch1)){
                        dups += ch1;
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
