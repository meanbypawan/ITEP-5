package com.testcurdoperation.test;

import com.testcrudoperation.service.DatabaseConnection;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;

public class TestMetaData {
    public static void main(String[] args) {
        Connection con= null;
        try{
            con = DatabaseConnection.getConnection();
            String sql = "select id as PRODUCTID,name as PRODUCTNAME,price as PRODUCTPRICE from product";
            PreparedStatement ps = con.prepareStatement(sql);
            
            ResultSet rs = ps.executeQuery();
            
            ResultSetMetaData rsmd = rs.getMetaData();
            
            for(int i=1; i<=rsmd.getColumnCount(); i++){
                System.out.println(rsmd.getColumnName(i)+"  "+rsmd.getColumnTypeName(i)+" "+rsmd.getColumnDisplaySize(i));
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
    }
    
}
