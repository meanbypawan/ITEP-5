
import java.sql.Connection;
import java.sql.Statement;
import java.util.Scanner;

public class TestInsert {

    public static void main(String[] args) {
        Connection con = null;
        try {
            Scanner sc = new Scanner(System.in);

            System.out.println("Enter Product Name");
            String name = sc.next();

            System.out.println("Enter Price");
            int price = sc.nextInt();

            System.out.println("Enter Product Brand");
            String brand = sc.next();

            con = DatabaseConnection.getConnection();
            
            String sql = "insert into product(name,price,brand) values('"+name+"',"+price+",'"+brand+"')";
            
            Statement st = con.createStatement();
            
            int x = st.executeUpdate(sql);
            if(x!=-1)
                System.out.println("Record Inserted....");
                
        } catch (Exception e) {
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
