import express from "express";
import bodyParser from 'body-parser';
import pool from './dbConfig.js';

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/home",(request,response,next)=>{
    response.write("Home Page");
    response.end();
});

app.get("/about",(request,response,next)=>{
    response.write("About Page");
    response.end();
});

app.get("/contact",(request,response,next)=>{
    response.write("Contact Page");
    response.end();
});

app.post("/signup",(request,response,next)=>{
    let username = request.body.username;
    let password = request.body.password;
    let email = request.body.email;
    let age = request.body.age;
    
    pool.getConnection((err,con)=>{
        if(!err){
          let sql = "insert into user(username,email,password,age) values(?,?,?,?)";
          con.query(sql,[username,email,password,age*1],(err,result)=>{
            if(err)
              return response.status(401).json({error: 'Bad request'});
            else
              return response.status(200).json({message: 'Signup success', data:{username,email,age}});
            con.release();
          });
        }
        else{
           console.log("Connection Failure...");
           console.log(err);
        }
    })
});
app.post("/signin",(request,response,next)=>{
   let email = request.body.email;
   let password = request.body.password;

   pool.getConnection((err,con)=>{
    if(!err){
      let sql = "select * from user where email = ? and password = ?";
      con.query(sql,[email,password],(err,result)=>{
        if(err)
          return response.status(500).json({error: 'Internal Server Error'});
        else if(result.length!=0)
              return response.status(200).json({message: 'Sign in success...'});
             else
              return response.status(401).json({error: "Unauthorized request..."}); 
      });
    }
    else
      return response.status(500).json({error: 'Internal Server Error'});
   })
});

app.post("/add",(request,response,next)=>{
    let a  = request.body.a*1;
    let b = request.body.b*1; 
    response.end("Addition : "+(a+b));
})

app.get("/test",(request,response,next)=>{
   response.json({message: "Hello Server....."});
});

app.use((request,response,next)=>{
    console.log("app.use() is executed......");
    response.end("Bad request.....");
});



app.listen(3000,()=>{
    console.log("Server Started.....");
});