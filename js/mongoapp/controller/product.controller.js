import { Product } from "../model/product.model.js"

export const saveInBulk = (request,response,next)=>{
    Product.insertMany(request.body.products)
    .then(result=>{
        return response.status(200).json({message: "Data created.."});
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({error: "Internal server error"});
    })
}