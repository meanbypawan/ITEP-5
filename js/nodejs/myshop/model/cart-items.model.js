import pool from "../db/dbConfig.js";
export default class CartItems{
    constructor(id, cartId, productId){
        this.id = id;
        this.cartId = cartId;
        this.productId = productId;
    }

    static saveCartItem(cartId,productId){
       return new Promise((resolve,reject)=>{
         pool.getConnection((err,con)=>{
            if(err) reject(err);
            else{
                let sql = "insert into cartItems(cartId,productId) values(?,?)";
                con.query(sql,[cartId,productId],(err,result)=>{
                    con.release();
                    err ? reject(err) : resolve(result);
                })
            }
         })
       }); 
    }
}