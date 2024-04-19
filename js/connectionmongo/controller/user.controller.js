import db from "../db/dbConfig.js";
export const signUp = (request,response,next)=>{
   db.collection("user").insertOne(request.body)
   .then(result=>{
    return response.status(200).json({message:"Sign up success..."});
   }).catch(err=>{
    return response.status(500).json({error: "Internal Server Error."});
   })
}

export const signIn = (request,response,next)=>{
    db.collection("user").findOne({email: request.body.email,password:request.body.password})
    .then(result=>{
       if(result) 
        return response.status(200).json({message: "Sign in success", user:result});
       return response.status(401).json({error: "Bad request"});
    }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error"});
    })
}