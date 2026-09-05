public class firstUniqueChar {

    public static void main(String[] args) {

        String str = "VeenVaV";
        boolean unique = true;

        for (int i = 0; i < str.length(); i++) {   
            unique = true;
            
            for (int j = 0; j < str.length(); j++) {

                System.out.println("ch = " + str.charAt(i)
                        + " : ch1 = " + str.charAt(j));

                if (i != j && str.charAt(i) == str.charAt(j)) {
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