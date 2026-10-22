public class equalsAndEqual {
    public static void main(String[] args) {

        String vk = "Veena";
        String vk1 = "Veena";

        System.out.println(vk == vk1); // Same reference ?
        System.out.println(vk.equals(vk1)); // Same value?

        vk = "Vina";
        System.out.println(vk == vk1);
        System.out.println(vk.equals(vk1));
    }
}