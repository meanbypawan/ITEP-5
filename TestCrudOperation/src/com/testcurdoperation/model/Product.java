package com.testcurdoperation.model;

public class Product {
  private Integer id;
  private String name;
  private Integer price;
  private String brand;

    public Product() {
    }

    public Product(Integer id, String name, Integer price, String brand) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.brand = brand;
    }

    public Product(String name, Integer price, String brand) {
        this.name = name;
        this.price = price;
        this.brand = brand;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }
  
  
}
