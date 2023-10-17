package com.testcurdoperation.dao;

import com.testcrudoperation.service.DatabaseConnection;
import com.testcurdoperation.model.Product;
import java.sql.Connection;
import java.sql.PreparedStatement;

public class ProductDAO {
    
   public static int insert(Product p){
       Connection con  = null;
       int x = -1;
       try{
           con = DatabaseConnection.getConnection();
           //                                                         1,2,3
           String sql = "insert into product(name,price,brand) values(?,?,?)";
           
           PreparedStatement ps = con.prepareStatement(sql);
           
           ps.setString(1, p.getName());
           ps.setInt(2, p.getPrice());
           ps.setString(3,p.getBrand());
           
           x = ps.executeUpdate();
           
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
       return x;
   }    
   
   public static void delete(int id){
       
   }
   
   public static void update(Product p){
       
   }
   
   public static void getList(){
       
   }
}
