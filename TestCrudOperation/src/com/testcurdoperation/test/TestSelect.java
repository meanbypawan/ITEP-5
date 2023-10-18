package com.testcurdoperation.test;

import com.testcurdoperation.dao.ProductDAO;
import com.testcurdoperation.model.Product;
import java.util.ArrayList;

public class TestSelect {
    public static void main(String[] args) {
        ArrayList<Product>al = ProductDAO.getList();
        
        if(al.size()!=0){
            for(Product p :  al){
                System.out.println(p.getId()+" "+p.getName()+" "+p.getPrice()+" "+p.getBrand());
            }
        }
    }
    
}
