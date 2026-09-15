// This program removes duplicate characters from a string.

public class removeDuplicateChar {

    public static void main(String[] args) {

        String str = "Veena Katiyar";
        String unique = "";

        for(int i=0; i<str.length();i++){
            if(! unique.contains(String.valueOf(str.charAt(i)))){
                unique += str.charAt(i);
            }
        }
        System.out.println("Unique = " + unique);
    }
    
}
