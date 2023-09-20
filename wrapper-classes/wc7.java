/*
  name :- validate
 */
import java.util.Scanner;
class TestMain{
    public static boolean isValidMobile(String mobile){
     try{
      Long.parseLong(mobile);
      if(mobile.length()!=10)
        return false;
      return true;  
     }
     catch(Exception e){
      return false;
     }
    }
    public static void main(String args[]){
      
      Scanner sc = new Scanner(System.in);
      System.out.println("Enter Mobile");

      String mobile = sc.next().trim();
     
   }
}