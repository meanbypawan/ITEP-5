import Category from "../model/category.model.js";
import Product from "../model/product.model.js";

export const saveInBulk = async (request,response,next)=>{
 try{ 
  let categoryList = request.body;
  for(let category of categoryList)
    await Category.create({categoryName: category});
  return response.status(200).json({message: "All Category Saved.."});
}
catch(err){
   return response.status(500).json({error: "Internal Server Error"});
}
}

export const fetchCategory = (request,response,next)=>{
   Category.findAll({
    include:[{model: Product, required: true}]
   }).then(result=>{
    return response.status(200).json({categories: result});
   }).catch(err=>{
    return response.status(500).json({error: "Internal server error"});
   })
}













