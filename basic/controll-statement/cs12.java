/*
   ch = ?
 */
import java.util.Scanner;
class Test{
   public static void main(String arg[]){
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter a City Name(Indore|Pune)");
    String city = sc.next();
    
    switch(city){
      case "Indore" : System.out.println("MP");break;
      case "Pune": System.out.println("MH");break;
      default: System.out.println("Invalid City");
      
    }
   }
}





