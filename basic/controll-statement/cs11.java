/*
   ch = ?
 */
import java.util.Scanner;
class Test{
   public static void main(String arg[]){
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter a letter");
    char ch = sc.next().charAt(0);
    switch(ch){
        case 'a': System.out.println("a is vowel");break;  
        case 'e': 
        case 'i': 
        case 'o': 
        case 'u': System.out.println("Vowel...");break;
        default: System.out.println("Not Vowel...");
    }
    /*
    if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch=='u')
      System.out.println("Vowel...");
    else
     System.out.println("Not vowel...");  
    */
   }
}





