package com.testcurdoperation.test;

import com.testcurdoperation.dao.ProductDAO;
import com.testcurdoperation.model.Product;
import java.util.Scanner;

public class TestUpdate {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter product name");
        String name = sc.next();
        
        System.out.println("Enter Price");
        String price = sc.next();
        
        System.out.println("Enter brand");
        String brand = sc.next();
        
        System.out.println("Enter id");
        String id = sc.next();
        
        
        Product p = new Product(Integer.parseInt(id),name,Integer.parseInt(price),brand);
        
        if(ProductDAO.update(p)!=-1)
            System.out.println("Product updated...");
        else
            System.out.println("Oops ! something went wrong...");
    }
    
}
