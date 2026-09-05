public class ReverseTheString {

    public static void main(String[] args) {

        String str = "Hello World";

        String reversed = new StringBuilder(str)
                                .reverse()
                                .toString();

        System.out.println("Original String: " + str);
        System.out.println("Reversed String: " + reversed);
    }
}