// Input : Java is very easy
// Expected output : easy very is Java

public class reverseWords {
    public static void reverseWords1(String str){
        String[]words = str.split(" ");

        for (int i = words.length-1;i>=0; i--){
            System.out.print(words[i] + " ");
        }
    }    
    public static void main(String[] args) {
        reverseWords.reverseWords1("Java is very easy");
    }
}

