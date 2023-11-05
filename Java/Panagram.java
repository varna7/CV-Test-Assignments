package CloudVandana.Java;

import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class Panagram {

    public static boolean isPangram(String input) {
        Set<Character> letterSet = new HashSet<>();
        for (char c : input.toLowerCase().toCharArray()) {
            if (Character.isLetter(c)) {
                letterSet.add(c);
            }
        }
        
        return letterSet.size() == 26;
    }

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String str = input.nextLine();
        input.close();

        if (isPangram(str)) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }
}

    

