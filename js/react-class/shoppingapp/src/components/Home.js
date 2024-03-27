import { useContext, useEffect, useState } from "react"
import Category from "./Category"
import Header from "./Header"
import axios from "axios";
import Product from "./Product";
import { ProductContext } from "../App";

export default ()=>{
    const {productList,setProductList} = useContext(ProductContext);
    return <>
      <Header/>
      <Category setProductList={setProductList}/>
      <Product productList={productList}/>
    </>
}