// This program prints a specified number of prime numbers.
public class primeNo {

    public static void main(String[] args) {

        int no = 7; // How many prime no. required
        boolean prime = false;
        int num = 2;
        int count = 0;

        for (int k = 1; count < no; k++){
            prime = true;
            for (int i = 2; i <= num; i++){       

                if(num % i == 0 && i != num){
                    prime = false;   
                    break; 
                }
            }

            if(prime == true){
                count ++;
                System.out.println("Count = " + count + " : " + "K = " + k + " : " + num );                
            }
            num++;
    }        
    }    
}