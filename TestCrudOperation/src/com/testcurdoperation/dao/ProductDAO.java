package com.testcurdoperation.dao;

import com.testcrudoperation.service.DatabaseConnection;
import com.testcurdoperation.model.Product;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

public class ProductDAO {
   public static int update(Product p){
       Connection con  = null;
       int x = -1;
       try{
           con = DatabaseConnection.getConnection();
           //                                                         1,2,3
           String sql = "update product set name = ?, price = ?, brand = ? where id = ?";
           
           PreparedStatement ps = con.prepareStatement(sql);
           
           ps.setString(1, p.getName());
           ps.setInt(2, p.getPrice());
           ps.setString(3,p.getBrand());
           ps.setInt(4, p.getId());
           
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
   
   public static int delete(int id){
       Connection con = null;
       int x = -1;
       try{
           con = DatabaseConnection.getConnection();
           String sql = "delete from product where id = ?";
           PreparedStatement ps = con.prepareStatement(sql);
           ps.setInt(1, id);
           
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
   
   public static ArrayList<Product> getList(){
     Connection con = null;
       ArrayList<Product> al = new ArrayList<Product>();
     try{
         con = DatabaseConnection.getConnection();
         String sql = "select * from product";
         //PreparedStatement ps = con.prepareStatement(sql,ResultSet.TYPE_FORWARD_ONLY);
         //PreparedStatement ps = con.prepareStatement(sql,ResultSet.TYPE_SCROLL_INSENSITIVE);
         PreparedStatement ps = con.prepareStatement(sql,ResultSet.TYPE_SCROLL_SENSITIVE,ResultSet.CONCUR_UPDATABLE);
         ResultSet rs = ps.executeQuery();
     
         while(rs.next()){
            int id =  rs.getInt("id");
            if(id == 5){
                rs.updateInt("price", 65000);
                rs.updateRow();
            }            
            String name = rs.getString("name");
            int price = rs.getInt("price");
            String brand = rs.getString("brand");
            Product p = new Product(id, name, price, brand);
            al.add(p);
         }
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
     return al;
   }
}




















