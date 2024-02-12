import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";

const Product = sequelize.define("product",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false
    },
    price:{
        type: DataTypes.FLOAT
    },
    discountPercentage:{
        type: DataTypes.FLOAT
    },
    rating:{
        type: DataTypes.FLOAT
    },
    stock: DataTypes.INTEGER,
    brand: DataTypes.STRING,
    categoryname: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    imageArray: DataTypes.STRING(1000)        
});
sequelize.sync().then(()=>{
    console.log("Product table created....");
}).catch(err=>{
    console.log(err);
    console.log("Error in Product");
})
export default Product;