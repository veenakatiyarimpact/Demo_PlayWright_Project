// This program calculates the factorial of a number.

public class factorial {

    public static void main(String[] args) {
        
    
    int no = 5;
    int fact = 1;

    for (int i=1; i<=no; i++){
        fact *= i;
    }
    System.out.println("Factorial of " + no + " = " + fact);    
}
}