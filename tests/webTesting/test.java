package tests.webTesting;

public class test {

    public static void main(String[] args) {
        String name = "Proggrammersoap";
        String[] names = name.split("");
        int freq = 0;

        // boolean found= false;
        int inst = 0;

        for (int i = 0 ; i< name.length();i++ ){
            freq = 0;
           for (int j=i; j< name.length()-1; j++){
            System.out.println(names[i]  +  "  : " + names[j]);
            if(names[i].equalsIgnoreCase(names[j])){
                freq++;
            }
            if(freq == 1)
            {
                inst++;
            
            }
            if(inst == 2){
                System.out.println(names[i]);
            }
           }

        }
        System.out.println("Start small. Ship something.");
    }
    
}
