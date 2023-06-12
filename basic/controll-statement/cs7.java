/*
  WAP to enter an integer number b/w 1 to 5. Print
  it in corresponding character form

  n = 1 --> One
  n = 2 --> Two
  n = 3 --> Three
   .
   .
  n = 5 --> Five 
*/
import java.util.Scanner;
class Test{
  public static void main(String args[]){
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter an integer number b/w 1 to 5");
    int n = sc.nextInt();

    if(n == 1)
      System.out.println("One");
    else if(n == 2)
      System.out.println("Two");

    else if(n == 3)
      System.out.println("Three");

    else if(n == 4)
      System.out.println("Four");

    else if(n == 5)
      System.out.println("Five");        
  }
}










