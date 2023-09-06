
import java.io.File;
import java.util.Scanner;

public class TestScanner {
  public static void main(String[] args) {
     try{
         File f = new File("/home/pawansahu/Documents/ITEP-5/abc.txt");
         Scanner sc = new Scanner(f);
         String line = sc.nextLine();
         while(line != null){
             System.out.println(line);
             line = sc.nextLine();
         }
     } 
     catch(Exception e){
         System.out.println("Data End..");
     }
  }
    
}
