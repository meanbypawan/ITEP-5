
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class TestMain {
  public static void main(String[] args) {
    try{  
     Class.forName("com.mysql.cj.jdbc.Driver");
     System.out.println("Driver Class Load successfully....");
     
     Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/eshopdb", "root", "");
     System.out.println("Database connected....");
    
     String sql = "insert into product(name,price,brand) values('Adidas Shoes,2300,'Adidas')";
     
     Statement st = con.createStatement();
    
     int x = st.executeUpdate(sql);
     
     if(x!=-1)
            System.out.println("Record Inserted.....");
    }
    catch(ClassNotFoundException e){
        e.printStackTrace();
    }
    catch(SQLException e){
        e.printStackTrace();
    }
  }
    
}
