import java.util.Scanner;
class Message{
   void greetUser(){
    System.out.println("Hello Friends....");
   }
}
class Test{
    public static void main(String ags[]){
        //Scanner sc = new Scanner(System.in);
        System.out.println("Enter 1st number....");
        int x = new Scanner(System.in).nextInt();

        System.out.println("Enter 2nd number....");
        int y = new Scanner(System.in).nextInt();

        //int z = x + y;
        System.out.println("Addition : "+(x+y)); 
    
        new Message().greetUser();        
    }
}