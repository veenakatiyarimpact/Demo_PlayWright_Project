// This program counts the occurrences of each character in a string.

public class countChars {

    public static void countChars1(String str) {
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
        countChars.countChars1("Veena Katiyar");
        countChars.countChars1("AaBbCcDd");
        countChars.countChars1(" ");
    }
}