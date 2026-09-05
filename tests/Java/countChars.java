public class countChars {

    public static void countChars(String str) {
        String found = "";

        for(int i = 0; i< str.length();i++){
            int count = 1;
            char ch = str.charAt(i);
            if(! (found.contains(String.valueOf(ch)))){
            
            for (int j=i +1; j<str.length();j++){
                if(ch == str.charAt(j)){
                    count++;
                }
        }
        found += ch;                
        System.out.println("Char = " + ch + " : occurence = " + count);
        }        
    }
    System.out.println();
    }

    public static void main(String[] args) {
        countChars.countChars("Veena Katiyar");
        countChars.countChars("AaBbCcDd");
        countChars.countChars(" ");
    }
}