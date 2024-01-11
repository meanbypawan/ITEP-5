import Admin from '../model/admin.model.js';
export const signUp = (request,response,next)=>{
    let username = request.body.username;
    let password = request.body.password;

    // admin :{username: 'test', password: '12345'}
    let admin = new Admin(null,username,password);
    
    admin.signUp()
    .then(result=>{
        return response.status(200).json({message: 'Signup success'});
    }).catch(err=>{
        return response.status(500).json({error: 'Internal Server Error'});
    });
}

export const signIn = (request,response,next)=>{
    
}