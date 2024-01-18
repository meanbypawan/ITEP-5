import User from '../model/user.model.js';
import jwt from 'jsonwebtoken';
export const signUp = (request,response,next)=>{
    let username = request.body.username;
    let password = request.body.password;
    let email = request.body.email;
    let contact = request.body.contact;
    
    let user = new User(null,username,email,password,contact);

    user.save()
    .then(result=>{
       return response.status(200).json({message: "Sign up success"});
    }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error"});
    });
}
export const signIn = (request,response,next)=>{
   let email =  request.body.email;
   let password = request.body.password;

   let user = new User();
   user.email = email;
   user.password = password;

   user.signIn()
   .then(result=>{
      if(result.length){
       // xx.yy.zz
       let payload = {subject: email};
       let token = jwt.sign(payload,'fdfjfjrwieroerivxcnmvnnvrweiorddfsdfdlkfjlfjljldharna');
       return response.status(200).json({message: 'Sign in success',data:result[0],token:token});
      }
      else
       return response.status(401).json({error: "Unauthorized request"}); 
   })
   .catch(err=>{
     return response.status(500).json({error: "Internal Server Error"});
   });
}







