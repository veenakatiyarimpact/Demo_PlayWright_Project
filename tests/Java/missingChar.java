// This program finds a missing character in an alphabetic sequence.

public class missingChar {

    public static void missingChar1(String str) {
        
        int len = str.length();
        char ch = str.charAt(0);
        boolean found = false;

        for (int i = 1; i< len; i++){
            ch++;
            char ch1 = str.charAt(i);
            System.out.println("Char = " + ch + " : ch1 = " + ch1);
            if(ch != ch1){
                System.out.println("Missing character is " + ch);
                found = true;
                break;
            }
        }
        if(found == false){
            System.out.println("Missing character is " + ++ch);
        }
    }

    public static void main(String[] args) {

        missingChar.missingChar1("ABCD");
        missingChar.missingChar1("ACD");

    }
}