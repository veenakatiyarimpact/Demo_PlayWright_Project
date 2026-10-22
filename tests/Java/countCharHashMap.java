import java.util.HashMap;
import java.util.Map;

public class countCharHashMap {

    public static void main(String[] args) {

        String str = "VeetnaVak";

        // Create HashMap
        Map<Character, Integer> map = new HashMap<>();

        // Iterate through each character
        for (int i = 0; i < str.length(); i++) {

            char ch = str.charAt(i);

            // Check whether character exists in Map
            if (map.containsKey(ch)) {

                map.put(ch, map.get(ch) + 1);

            } else {
                map.put(ch,1);
            }
        }

        // Print character frequency
        for (Map.Entry<Character, Integer> entry : map.entrySet()) {

            System.out.println(entry.getKey() + " = " + entry.getValue());
        }
    }
}
