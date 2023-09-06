
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;

public class TestOOS {
  public static void main(String[] args) {
     try{
         File f = new File("/home/pawansahu/Documents/ITEP-5/customer.txt");
         
         if(!f.exists())
             f.createNewFile();
         
         FileOutputStream fos = new FileOutputStream(f);
         
         ObjectOutputStream oos = new ObjectOutputStream(fos);
            
         Customer c = new Customer(100, "Cheeku Singh", 21, "9009111222");
         
            oos.writeObject(c);
         
         System.out.println("Operation success...");
         
     }
     catch(IOException e){
         e.printStackTrace();
     }
  }
    
}
