import { Cart } from "../model/cart.model.js";
export const removeItem = (request,response,next)=>{
    Cart.updateOne({userId: request.params.userId},{
        $pull:{cartItems: {productId: request.params.productId}}
    }).then(result=>{
        if(result.modifiedCount)
         return response.status(200).json({message: "Item removed"});
        return response.status(401).json({error: "Id not found"});
    }).catch(err=>{
        return response.status(500).json({message: "Internal server error"});
    }); 
}
export const fetchCart = (request,response,next)=>{
    Cart.findOne({userId: request.params.userId}).populate("userId").populate("cartItems.productId")
    .then(result=>{
        return response.status(200).json({cart: result});
    }).catch(err=>{
        return response.status(500).json({error: "Internal server error"});
    })
}
export const addToCart = async (request,response,next)=>{
    try{ 
     const {userId, productId} = request.body;
     let cart = await Cart.findOne({userId: userId});
     console.log(cart);
     if(cart){
        let status =  cart.cartItems.some((item)=>item.productId == productId);
        if(status)
          return response.status(200).json({message: "Product is already added in cart"});
        
        cart.cartItems.push({productId});
        
        await cart.save();

        return response.status(200).json({message: "Product added in cart"});
     }
     else{
       let result = await Cart.create({userId,cartItems:[{productId}]});
       return response.status(200).json({message: "Item added in cart",cart:result});
     }
    }
    catch(err){
        return response.status(500).json({error: "Internal server error"});
    }     
}