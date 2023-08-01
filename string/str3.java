import java.util.Scanner;
class Test{
    public static void main(String args[]){
      System.out.println("Enter String");
      String line = new Scanner(System.in).nextLine();

    //   if(line.toLowerCase().contains("The".toLowerCase()))
    //     System.out.println("Found");
    //   else
    //     System.out.println("Not Found");  
      if(line.contains("The") && line.contains("is"))
        System.out.println("Found");
      else
        System.out.println("Not Found");  
    }
}