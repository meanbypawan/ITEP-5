/*
   char x = "A";
   Character cobj = x;  // Auto -Boxing

   char y = cobj; //  Auto Un-Boxing

   char x = ?;

   isUpperCase(char)
   isLowerCase(char)
   isDigit(char)---------------> static
   isAlphabetic(char)
   isSpace(char)
   ---
   --- 
*/
import java.util.Scanner;
class TestMain{
    public static void main(String args[]){
       Scanner sc = new Scanner(System.in);
       System.out.println("Enter A Character..");
       //char ch = sc.next().charAt(0);
       char ch = ' '; 
       System.out.println("isUpperCase : "+Character.isUpperCase(ch));
       System.out.println("isLowerCase : "+Character.isLowerCase(ch));
       System.out.println("isSpace : "+Character.isSpace(ch));
       System.out.println("isDigit : "+Character.isDigit(ch));
       System.out.println("isAlphabetic : "+Character.isAlphabetic(ch));
    }
}




