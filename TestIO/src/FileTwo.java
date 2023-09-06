
import java.io.File;

public class FileTwo {
    public static void main(String[] args) {
        File f = new File("/home/pawansahu/Documents/ITEP-5");
        if(f.exists()){
           File items[] =  f.listFiles();
           
           for(File file : items){
               if(file.isDirectory()){
                   System.out.println("Parent Folder : "+file.getName());
                   for(File subFile : file.listFiles()){
                       System.out.println(subFile.getName());
                   }
               }
                 
            }
        }
    }
  
} 
