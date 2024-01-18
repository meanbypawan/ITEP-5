import pool from '../db/dbConfig.js';
export default class User{
    constructor(id,username,email,password,contact){
        this.id = id;
        this.username = username;
        this.email = email;
        this.contact = contact;
        this.password = password;
    }
    signIn(){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(err) reject(err);
                else{
                    let sql = "select * from user where email = ? and password = ?";
                    con.query(sql,[this.email,this.password],(err,result)=>{
                        con.release();
                        err ? reject(err) : resolve(result);
                    });
                }
            });
        });
    }
    save(){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(err) reject(err);
                else{
                    let sql = "insert into user(username,email,password,contact) values(?,?,?,?)";
                    con.query(sql,[this.username,this.email,this.password,this.contact],(err,result)=>{
                        con.release();
                        err ? reject(err) : resolve(result);
                    });
                }
            });
        });
    }
}