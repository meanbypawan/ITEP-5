import pool from "../db/dbConfig.js";
export default class Product{
    constructor(id,title,price,brand,description,imageUrl,categoryId){
        this.id = id;
        this.title = title;
        this.price = price;
        this.brand = brand;
        this.description = description;
        this.imageUrl = imageUrl;
        this.categoryId = categoryId;
    }

    save(){
        return new Promise((resolve,reject)=>{
          pool.getConnection((err,con)=>{
            if(err) reject(err);
            else{
               let sql = "insert into product(title,price,brand,description,categoryId,imageUrl) values(?,?,?,?,?,?)";
               con.query(sql,[this.title,this.price*1,this.brand,this.description,this.categoryId*1,this.imageUrl],(err,result)=>{
                  con.release();
                  err ? reject(err) : resolve(result); 
               });              
            }
          })
        });
    }
    static getProductList(){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
              if(err) reject(err);
              else{
                 let sql = "select *,category.categoryName from product inner join category on product.categoryId = category.id";
                 con.query(sql,(err,result)=>{
                    con.release();
                    err ? reject(err) : resolve(result); 
                 });              
              }
            })
          });
    }
}