
import java.sql.Connection;
import java.sql.Statement;
import java.util.Scanner;

public class TestDelete {
   public static void main(String[] args) {
       Connection con = null;
       try{
           Scanner sc = new Scanner(System.in);
           
           System.out.println("Enter record id to be delete");
           String id = sc.nextLine();
       
           String sql = "delete from product where id = "+id;
           
           con = DatabaseConnection.getConnection();
           
           Statement st = con.createStatement();
           
           int x = st.executeUpdate(sql);
           
           if(x!=-1)
               System.out.println("Record Deleted...");
       }
       catch(Exception e){
           e.printStackTrace();
       }
       finally{
           try{
               con.close();
           }
           catch(Exception e){
               e.printStackTrace();
           }
       }
   }
    
}
