package com.testcurdoperation.test;

import com.testcurdoperation.dao.ProductDAO;
import com.testcurdoperation.model.Product;
import java.util.Scanner;

public class TestInsert {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.println("Enter product name");
        String name = sc.next();
        
        System.out.println("Enter product price");
        int price = sc.nextInt();
        
        System.out.println("Enter product brand");
        String brand = sc.next();
    
        Product p = new Product(name, price, brand);
        
        if(ProductDAO.insert(p)!=-1)
            System.out.println("Record Inserted...");
        else
            System.out.println("Oops!  something went wrong...");
    }
    
}
