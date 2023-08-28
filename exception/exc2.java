import java.util.Scanner;
import java.util.InputMismatchException;
class TestMain{
    public static void main(String args[]){
       Scanner sc = new Scanner(System.in);
       try{
          System.out.println("Enter String..");
          String s = sc.next();
          System.out.println("Char At 5th index : "+s.charAt(5));

          System.out.println("Enter 2 number...");
          int a = sc.nextInt();
          int b = sc.nextInt();

          int c = a / b;
          System.out.println("Result : "+c);

       }
       catch(StringIndexOutOfBoundsException | InputMismatchException | ArithmeticException e){
          if(e.getClass().getName().contains("java.lang.StringIndexOutOfBoundsException"))
            System.out.println("Too Short..");
          else if(e.getClass().getName().contains("ArithmeticException"))
                 System.out.println("Denom... can't be zero");
               else
                 System.out.println("please enter integer only.");    
       }
       finally{
           System.out.println("Finally executed.....All resources are released..");
       }
       System.out.println("At the end....");
    }
}




