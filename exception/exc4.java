/*
   age < 18
     InvalidVoterException
   
   public class Throwable extends Object{
      public Throwable(){}
      printStackTrace();
   }
   public class Exception extends Throwable{
      String msg;
      public Exception(String msg){
        this.msg = msg;
      }
   }

   throw
*/
class InvalidVoterException extends Exception{
   public InvalidVoterException(){
    super("Abhi app chote hai...");
   }
   public InvalidVoterException(String msg){
    super(msg);
   }
}

class TestMain{
    public static void main(String args[]){
      try{ 
        java.util.Scanner sc = new java.util.Scanner(System.in);
        System.out.println("Enter Your Age");
        int age = sc.nextInt();
        if(age < 18)
          throw new InvalidVoterException();
        else
          System.out.println("Thanks For voting...");               
      }
      catch(Exception e){
        e.printStackTrace();
      }
      System.out.println("At the end.....");
    }
}