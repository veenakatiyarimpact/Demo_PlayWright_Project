// Anagrams means two strings contain the same characters with the same frequency, but possibly in a different order.


public class anagrams {
    public static void areAnagrams(String str1, String str2) {        

        char[]a = str1.toCharArray();
        char[]b = str2.toCharArray();

        java.util.Arrays.sort(a);
        java.util.Arrays.sort(b);

        if(java.util.Arrays.equals(a,b)){
            System.out.println("Anagrams : " + str1 + " , " + str2);
        }else{
            System.out.println("Not Anagrams : " + str1 + " , " + str2);
        }
    }

    public static void main(String[] args) { 
        anagrams.areAnagrams("Veena","naeVe" );  
        anagrams.areAnagrams("Veena","Vina" );  
    }    
}
