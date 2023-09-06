
import java.io.File;
import java.io.FileWriter;

public class TestWriter {
   public static void main(String[] args) {
      try{
          File f = new File("/home/pawansahu/Documents/ITEP-5/abc.txt");
          if(!f.exists())
              f.createNewFile();
          FileWriter fw = new FileWriter(f);
          
          String data = "Java is simple programming language Language";
          fw.write(data); //  Stream 
          fw.close(); // Stream --> Disk File
          System.out.println("Operation Success....");
      }
      catch(Exception e){
          e.printStackTrace();
      }
   }
    
}
