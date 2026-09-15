// This program finds the first unique character in a string.

public class firstUniqueChar {

    public static void main(String[] args) {

        String str = "VeenVaV";

        for (int i = 0; i < str.length(); i++) {   
            boolean unique = true;
            char ch = str.charAt(i);

            for (int j = 0; j < str.length(); j++) {
                if (i != j && ch == str.charAt(j)) {
                    unique = false;
                    break;
                }
            }

            if (unique) {
                System.out.println("First unique char = " + str.charAt(i));
                break;
            }
        }
    }
}