import User from '../model/user.model.js';
export const save = (request,response,next)=>{
    User.create({
        name: request.body.name,
        email: request.body.email,
        password: request.body.password
    }).then(result=>{
      return response.status(200).json({data: result.dataValues, message: "User created.."});
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({error: "Internal Server Error.."});
    })
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
    console.log(result);
   }).catch(err=>{
    console.log(err);
   })
}










