import Product from '../model/product.model.js';
export const productList = (request,response,next)=>{
    Product.getProductList()
    .then(result=>{
      return response.status(200).json({data: result});
    }).catch(err=>{
      return response.status(500).json({error: "Internal Server Error"});
    });
}
export const saveProduct = (request,response,next)=>{
   let filename = request.file.filename;
   let title = request.body.title;
   let brand = request.body.brand;
   let description = request.body.description;
   let price = request.body.price;
   let categoryId = request.body.categoryId;
   let imageUrl = "images/"+filename;
   
   let product = new Product(null,title,price,brand,description,imageUrl,categoryId);

   product.save()
   .then(result=>{
     return response.status(200).json({message: "product save"}); 
   }).catch(err=>{
    return response.status(500).json({error: "Internal Server Error"});
   });
}