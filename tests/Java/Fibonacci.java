// The Fibonacci series is a sequence where each number is the sum of the previous two numbers.

public class Fibonacci {

    public static void main(String[] args) {
        int n = 10;
        int a = 5;
        int b = 6;

        System.out.print(a + "," + b);

        for (int i = 1; i < n-2 ; i++){
            int sum = a+b;
            System.out.print(","+sum);
            a =b;
            b=sum;
        }        
    }    
}
