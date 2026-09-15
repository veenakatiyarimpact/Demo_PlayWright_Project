// This program finds the second unique character in a string.

class secondUniqueChar{}
public static void main(String [] a){

    String str = "VeetnaVak";
    boolean unique = true;
    int freq = 0;

    for(int i=0; i< str.length(); i++){
        unique = true;

        for(int j=0; j<str.length();j++){
            if(i != j && str.charAt(i)==str.charAt(j)){
                System.out.println("Duplicate : " + str.charAt(i));
                unique = false;
                break;
            }
        }

        if(unique == true){
            freq++;
            if(freq == 2){
                System.out.println("Second unique = " + str.charAt(i));
                break;
            }

        }        
    }
}

