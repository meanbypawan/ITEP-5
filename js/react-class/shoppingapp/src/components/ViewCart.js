import { useEffect, useState } from "react"
import Header from "./Header"
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import {Link, Outlet, useNavigate } from "react-router-dom";

export default ()=>{
    const [cartItemList,setCartItemList] = useState([]);
    let [totalBillAmount, setTotalBillAmount] = useState(0);
    const navigate = useNavigate();
    useEffect(()=>{
        let userId = sessionStorage.getItem("user-id");
        axios.get(`http://localhost:3000/cart/list/${userId}`)
        .then(response=>{
            for(let product of response.data.data){
                product.qty = 1;
                totalBillAmount = totalBillAmount + product["products.price"];
                cartItemList.push(product);
            }
            setCartItemList([...cartItemList]);
            setTotalBillAmount(totalBillAmount);
        }).catch(err=>{
            console.log(err);
        })
    },[]);
    const updateQty = (value,index)=>{
        let product = cartItemList[index];
        product.qty = value;
        totalBillAmount = 0;
        cartItemList.splice(index,1);
        cartItemList.splice(index,0,product);
        setCartItemList([...cartItemList]);
        for(let productItem of cartItemList){
            totalBillAmount = totalBillAmount + productItem["products.price"]*productItem.qty;
        }
        setTotalBillAmount(totalBillAmount);
    }
    const removeFromCart = (index,productId)=>{
        if(window.confirm("Are you sure ?")){
            let userId = sessionStorage.getItem("user-id");
            axios.delete(`http://localhost:3000/cart/remove-from-cart/${userId}/${productId}`)
            .then(response=>{
                toast.info("Item removed..");
                cartItemList.splice(index,1);
                setCartItemList([...cartItemList]);
            })
            .catch(err=>{
                toast.error("Oops! something went wrong...");
            });
        }
    }
    return <>
      <ToastContainer/>
      <Header/>
      <hr/>
      <div className="container">
        <button onClick={()=>navigate("/home")} className="btn btn-info">Back</button>
      </div>
      <div className="container mt-5">
         <div className="row">
           <div className="col-md-8">
            <table className="table">
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Title</th>
                        <th>Brand</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItemList.map((item,index)=><tr key={index}>
                        <td>{index+1}</td>
                        <td>{item["products.title"]}</td>
                        <td>{item["products.brand"]}</td>
                        <td>{item["products.price"]}</td>
                        <td><input onChange={(event)=>updateQty(event.target.value,index)} type="number" defaultValue={item.qty} style={{width:"50px", height:"20px"}}/></td>
                        <td><small onClick={()=>removeFromCart(index,item["products.id"])} className="text-danger" style={{cursor:"pointer"}}>Remove</small></td>
                    </tr>)}
                </tbody>
            </table>
           </div>
           <div className="col-md-3 offset-1 p-2">
            <div className="d-flex flex-column p-2"  style={{boxShadow: "0 0 5px 5px grey"}}>
               <h4 className="text-center">Order summery</h4>
               <div className="mt-2">
                 <label>Item purchased: {cartItemList.length}</label>
                 <label>Total Amount : <b className="text-success">{totalBillAmount}</b></label>
               </div>
               <div>
                 <Link to="order-detail">
                  <button className="btn btn-secondary" style={{width:"100%",margin:"auto"}}>Checkout</button>
                </Link>
               </div> 
            </div>

            <div className="row mt-5">
                <div className="col-12">
                    <Outlet/>
                </div>
            </div>
           </div>
         </div>       
      </div>
    </>
}