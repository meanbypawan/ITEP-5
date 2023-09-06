
import java.io.File;
import java.io.FileOutputStream;

public class TestFOS {
  public static void main(String[] args) {
      try{
      File f = new File("/home/pawansahu/Documents/ITEP-5/abc.txt");
      if(f.exists()){
          String s = "\nJava is robust programming language";
          FileOutputStream fout = new FileOutputStream(f, true);
          
          byte data[] = s.getBytes();
          
          fout.write(data);
          System.out.println("Operation Success...");
      }
      }catch(Exception e){
          System.out.println(e);
      }
  }
    
}
