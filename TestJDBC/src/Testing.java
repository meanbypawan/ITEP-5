public class Testing {
  public static void main(String[] args) {
   String name = "ABC";
   int price = 20000;
   String brand = "XYZ";
   
   String sql = "insert into product(name,price,brand) values('"+name+"',"+price+",'"+brand+"')";
            
      System.out.println(sql);
}
    
}
