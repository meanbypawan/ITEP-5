
import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class First {
    public static void main(String[] args) {
        File f = new File("/home/pawansahu/Documents/ITEP-5/abdc.txt");
        
        if(f.exists()){
        System.out.println("Name : "+f.getName());
        System.out.println("Path : "+f.getAbsolutePath());
        System.out.println("canRead : "+f.canRead());
        System.out.println("canWrite : "+f.canWrite());
        System.out.println("canExecute : "+f.canExecute());
        System.out.println("isHidden : "+f.isHidden());
        System.out.println("isFile : "+f.isFile());
        System.out.println("isDirectory : "+f.isDirectory());
        
        long lastTime = f.lastModified();
        
        SimpleDateFormat sd = new SimpleDateFormat("dd-MM-yyyy hh:mm:ss");
        
        String formattedDate = sd.format(new Date(lastTime));
        System.out.println("lastModified : "+formattedDate);
        System.out.println("Size : "+f.length());
        }
        else{
            System.out.println("File Not Found....");
            try {
                f.createNewFile();
            } catch (IOException ex) {
               ex.printStackTrace();
            }
        }
    }
}
