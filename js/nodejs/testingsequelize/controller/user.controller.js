import { validationResult } from 'express-validator';
import User from '../model/user.model.js';

export const signIn = async (request,response,next)=>{
    let email  = request.body.email;
    let password = request.body.password;

    let user = await User.findOne({where:{email:email},raw: true});
    if(user){
      if(User.checkPassword(password,user.password))
        return response.status(200).json({message: "Sign In Success"});
      return response.status(401).json({error: "Unauthorized user"});  
    }
    else
     return response.status(401).json({error: "Unauthorized user"});
}
export const save = (request,response,next)=>{
    const errors = validationResult(request);
    if(!errors.isEmpty())
      return response.status(401).json({error: errors.array()});    
    
    User.create({
        name: request.body.name,
        email: request.body.email,
        password: request.body.password
    }).then(result=>{
      return response.status(200).json({data: result.dataValues, message: "User created.."});
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({error: "Internal Server Error.."});
    });
}

export const userList = (request,response,next)=>{
   User.findAll({raw: true})
   .then(result=>{
    console.log(result);
   }).catch(err=>{
     console.log(err);
   })
}

export const getUserByEmail = (request,response,next)=>{
   User.findOne({where:{email: request.body.email}, raw: true})
   .then(result=>{
    return response.status(200).json({data: result});
   }).catch(err=>{
    return response.status(500).json({error: "Internal Server Error"});
   })
}










