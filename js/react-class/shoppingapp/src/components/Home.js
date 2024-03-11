import { useEffect, useState } from "react"
import Category from "./Category"
import Header from "./Header"
import axios from "axios";
import Product from "./Product";

export default ()=>{
    const [productList,setProductList] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/product/list")
        .then(response=>{
            setProductList(response.data.productList);
        }).catch(err=>{
            console.log(err);
        })
    },[]);
    return <>
      <Header/>
      <Category setProductList={setProductList}/>
      <Product productList={productList}/>
    </>
}