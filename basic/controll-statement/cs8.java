/*
  Switch:-

  // expression:- value(integer(byte,short,int,long),character, String)
  switch(expression){
    case label-1: state-----1;
                  break;
    case label-2: state-----2;
                  break;
    .                     
    .
    .
    .
    case label-n: state----n;
  }
 */
import java.util.Scanner;
class Test{
   public static void main(String arg[]){
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter an number b/w 1 to 5");
    int n = sc.nextInt();
   
    // n = 7
    switch(n){
      case 1: System.out.println("One"); break;
      case 2: System.out.println("Two"); break;
      case 3: System.out.println("Three");break;
      case 4: System.out.println("Four");break;
      case 5: System.out.println("Five");break;  
      default : System.out.println("Invalid number");
    }
    System.out.println("Out of switch block");
   }
}





