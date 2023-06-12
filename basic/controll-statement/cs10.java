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
    System.out.println("Enter an number");
    int n = sc.nextInt();
    
    switch(n%2){
       case 0: System.out.println("Even...");break;
       case 1: 
       case -1: System.out.println("Odd...");break; 
    }
   }
}





