public class reverseStrng {
    public void reverseStrng1(String str) {

        String r = "";
        for(int i=str.length()-1;i>=0;i--){
            r+=str.charAt(i);
        }
        System.out.println("Reversed string1 = " + r);     
    }

    public void reverseStrng3(String str){

        String r = new StringBuilder(str).reverse().toString();
        System.out.println("Reversed string2 = " + r);
    }



    public static void main(String[] args) {
    reverseStrng revStr = new reverseStrng();
    // revStr.reverseStrng1("Veena Katiyar");
    revStr.reverseStrng3("Welcome home !!!!");
    }
}
