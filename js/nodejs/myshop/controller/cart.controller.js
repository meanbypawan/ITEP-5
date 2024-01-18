import Cart from '../model/cart.model.js';
import CartItems from '../model/cart-items.model.js';
export const addToCart = async (request,response,next)=>{
   try{ 
    let userId = request.body.userId;
    let productId = request.body.productId;

    let result = await Cart.isCartExist(userId);
    if(result.length){
        // cart exist and then we have save product in cartItems
       let cartId = result[0].id;
       await CartItems.saveCartItem(cartId,productId);
       return response.status(200).json({message: 'Item saved in cart'});
    }   
    else{
        // cart not exits then first creat cart then save product in cartItems
        let result = await Cart.createCart(userId);
        let cartId = result[0].id;
        await CartItems.saveCartItem(cartId,productId);
        return response.status(200).json({message: 'Item saved in cart'});
    }
   }catch(err){
    console.log(err);
    return response.status(500).json({error : 'Internal Server Error'});
   }
}