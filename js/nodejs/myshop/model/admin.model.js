import pool from '../db/dbConfig.js';
class Admin{
    constructor(id, username, password){
        this.id = id;
        this.username = username;
        this.password = password;
    }

    signUp(){
       return new Promise((resolve,reject)=>{
          pool.getConnection((err,con)=>{
            if(err) 
              reject(err);
            else{
               let sql = "insert into admin(username,password) values(?,?)";
               con.query(sql,[this.username,this.password],(err,result)=>{
                 err ? reject(err) : resolve(result);
                 con.release();
               });
            }
          })
       });
    }

    signIn(){}
}

export default Admin;