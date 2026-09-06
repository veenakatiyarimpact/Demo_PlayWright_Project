import java.util.Arrays;

public class test {

	public static boolean areAnagrams(String first, String second) {
		char[] firstCharacters = normalize(first).toCharArray();
		char[] secondCharacters = normalize(second).toCharArray();

		Arrays.sort(firstCharacters);
		Arrays.sort(secondCharacters);

		return Arrays.equals(firstCharacters, secondCharacters);
	}

	private static String normalize(String value) {
		return value.toLowerCase().replaceAll("[^a-z0-9]", "");
	}

	public static void main(String[] args) {

		if (areAnagrams("Listen","isLent")) {
			System.out.println("Anagrams");
		} else {
			System.out.println("Not anagrams");
		}
	}
}
