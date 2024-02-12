import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";
const Category  = sequelize.define("category",{
    categoryName:{
        type: DataTypes.STRING,
        primaryKey: true
    }
});

export default Category;