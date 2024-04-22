import { validationResult } from "express-validator"
import User from "../model/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const allUser = (request,response,next)=>{
    User.find()
    .then(result=>{
        return response.status(200).json({users: result});
    }).catch(err=>{
        return response.status(500).json({error: "Internal server error"});
    })
}
export const signIn = async (request, response, next) => {
    try {
        let user = await User.findOne({ contact: request.body.contact });
        return user ? User.checkPassword(request.body.password, user.password) ? response.status(200).json({ message: "Sign in success", user, token: genToken() })
            : response.status(401).json({ error: "Bad request|(Invalid password)" })
            : response.status(401).json({ error: "Bad request(Unauthorized user)" });
    }
    catch (err) {
        return response.status(500).json({ error: "Internal server error" });
    }
}
export const signUp = async (request, response, next) => {
    try {
        const error = validationResult(request);
        if (!error.isEmpty())
            return response.status(401).json({ error: "Bad request" });

        let user = await User.create(request.body);
        return response.status(200).json({ user, message: "User created..." });
    }
    catch (err) {
        return response.status(500).json({ error: "Internal server error" });
    }
}

const genToken = (contact) => {
    return jwt.sign({ subject: contact }, 'dfsldfjreorierfklsjfdjflsdjfl');
}