
import java.io.FileInputStream;
import java.io.IOException;
import java.io.ObjectInputStream;

public class TestOIS {
  public static void main(String[] args) {
    try{
        FileInputStream fis = new FileInputStream("/home/pawansahu/Documents/ITEP-5/customer.txt");
        
        ObjectInputStream ois = new ObjectInputStream(fis);
        
        Customer obj = (Customer)ois.readObject();
        
        System.out.println(obj.getId()+"  "+obj.getName()+" "+obj.getAge()+" "+obj.getMobile());
        
    } 
    catch(Exception e){
        e.printStackTrace();
    }
  }
    
}
