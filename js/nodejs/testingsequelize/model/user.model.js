import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";
import bcyrpt from "bcryptjs";

const User = sequelize.define("user",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
        set(value){
           let saltKey = bcyrpt.genSaltSync(10);
           let encryptedPassword = bcyrpt.hashSync(value,saltKey);
           this.setDataValue("password",encryptedPassword);
        }
    }
});

User.checkPassword = (originalPassword,encryptedPassword)=>{
    console.log("check Password called...."); 
    return bcyrpt.compareSync(originalPassword,encryptedPassword);
}

sequelize.sync()
.then(()=>{
    console.log("User table created....");
}).catch(err=>{
    console.log("Something wrong...");
    console.log(err);
});

export default User;
// sequelize.define create model then this model turn into model-class. and 
// it also provide interface to interact with database

// User.create()
// User.findOne()
// User.findAll()
// User.destroy()













