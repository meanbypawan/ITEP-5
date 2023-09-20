/*
  name :- validate
 */
import java.util.Scanner;
class TestMain{
    public static boolean validateName(String name){
      name = name.trim();
      int i;
      for(i=0; i<name.length(); i++){
         char ch = name.charAt(i);
         if(!(Character.isAlphabetic(ch) || Character.isSpace(ch)))
          break;
      }
      if(i == name.length())
        return true;
      return false;

    }
    public static void main(String args[]){
      Scanner sc = new Scanner(System.in);
      System.out.println("Enter Name");
      
      String name = sc.nextLine();
      if(TestMain.validateName(name))
        System.out.println("Valid Name");
      else
        System.out.println("Invalid name");   
   }
}