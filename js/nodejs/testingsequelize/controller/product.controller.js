import Product from "../model/product.model.js";

export const getProductByCategory = (request,response,next)=>{
   Product.findAll({where: {categoryname: request.params.categoryName}})
   .then(result=>{
    return response.status(200).json({productList: result})
   }).catch(err=>{
    console.log(err);
    return response.status(500).json({error: "Internal Server Error"});
   })
}
export const getProductList = async (request,response,next)=>{
   Product.findAll()
   .then(result=>{
    return response.status(200).json({productList: result});
   }).catch(err=>{
    return response.status(500).json({error: "Internal Server Error"});
   })
}
export const saveInBulk = async (request,response,next)=>{
  try{ 
   let productList = request.body.products;
   
   for(let product of productList){
     let {id,title,description,price,discountPercentage,rating,stock,thumbnail,brand} = product;
     let categoryname = product.category;
     let imageArray = "";
     for(let imageUrl of product.images)
       imageArray = imageArray + imageUrl+" ";
     
    await Product.create({
        id,title,description,price,discountPercentage,rating,stock,thumbnail,brand,
        categoryname,imageArray
     })  
   }
   return response.status(200).json({message: "All Product Saved...."});
  }catch(err){
    console.log(err);
    return response.status(500).json({error: "Internal Server Error"});
  }
}