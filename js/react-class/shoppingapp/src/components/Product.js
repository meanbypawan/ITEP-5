import axios from "axios"
import { ToastContainer, toast } from "react-toastify"

export default ({productList})=>{
  const addToCart = (productId)=>{
    axios.post("http://localhost:3000/cart/add-to-cart",{userId: sessionStorage.getItem("user-id"), productId})
    .then(response=>{
      toast.success(response.data.message);
    })
    .catch(err=>{
        toast.error("Oops! something went wrong...");
    });
  }
  return <>
    <ToastContainer/>
    <div className="container mt-3">
        <div className="row">
          {productList.map((product,index)=><div className="col-md-4 p-3" key={index}>
            <div className="d-flex flex-column align-items-center" style={{height:"400px", boxShadow: '0 0 5px grey'}}>
                <img src={product.thumbnail} style={{height: "250px", width:'100%'}}/>
                <h4 className="text-center mt-2">{product.title.slice(0,24)}</h4>
                <p className="mt-2 mb-2 text-center">Price : <b className="text-success">{product.price} Rs.</b></p> 
                <small className="text-primary">View more</small>
                <button onClick={()=>addToCart(product.id)} style={{width:"90%"}} className="btn btn-secondary text-white">Add To Cart</button>
            </div>
          </div>)}
        </div>
    </div>
  </>
}