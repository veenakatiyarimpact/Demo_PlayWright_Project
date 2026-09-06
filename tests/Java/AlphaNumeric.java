public class AlphaNumeric {
    public static void main(String[] args) {
        String str = "Pune123Nagar";
        String alpha = "";
        String num = "";

        for (int i = 0 ; i < str.length();i++){
            char ch = str.charAt(i);
            if (Character.isLetter(ch)) {
                alpha += ch;
            
            }else{
                num += ch;
            }
            
        }
        System.out.println("Alphabets = " + alpha);
        System.out.println("Numbers = " + num);
    }
}
