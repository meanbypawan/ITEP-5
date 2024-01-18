import pool from '../db/dbConfig.js';

export default class Cart{
   constructor(id,userId){
    this.id = id;
    this.userId = userId;
   }

   static isCartExist(userId){
      return new Promise((resolve,reject)=>{
        pool.getConnection((err,con)=>{
            if(err) reject(err);
            else{
                let sql = "select * from cart where userId = ?";
                con.query(sql,[userId],(err,result)=>{
                    con.release();
                    err ? reject(err) : resolve(result);
                })
            }
          });
      });
      
   }

   static createCart(userId){
     return new Promise((resolve,reject)=>{
        pool.getConnection((err,con)=>{
            if(err) reject(err);
            else{
                let sql = "insert into cart(userId) values(?)";
                con.query(sql,[userId],(err,result)=>{
                    if(err)
                      reject(err);
                    else{
                       let sql = "select * from cart where userId = ?";
                       con.query(sql,[userId],(err,result)=>{
                        con.release();
                        err ? reject(err) : resolve(result);
                       });     
                    }  
                })
            }
          });
      });
    }
}