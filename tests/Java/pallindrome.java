public class pallindrome {

    public static void main(String [] a){
        pallindrome obj1 = new pallindrome();
        obj1.isPallindrome("madam");
        obj1.isPallindrome("hello");
    }

    public void isPallindrome(String str){       
        String reverse = "";

        for (int i = str.length()-1;i>=0; i--){
            reverse = reverse + str.charAt(i);
        }

        if(str.equals(reverse)){
            System.out.println("String is Pallindrome : " + str);
        }else{
            System.out.println("String is not Pallindrome : " + str);
        }
    }
    
}
