import { Component } from "react";
import data from './data';
export default class ProductList extends Component{
  render(){
    let productList = data;
    return <>
       <h1>Product List Component</h1>
       <hr/>
       <table className="table">
        <thead>
            <tr>
                <th>S.no</th>
                <th>Title</th>
                <th>Image</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {productList.map((product,index)=><tr key={index}>
                <td>{index+1}</td>
                <td>{product.title}</td>
                <td><img src={product.thumbnail} width='100px' height='100px'/></td>
                <td>{product.brand}</td>
                <td>{product.price}</td>
                <td><button className="btn btn-primary">Edit</button></td>
                <td><button className="btn btn-danger">Delete</button></td>
            </tr>)}
        </tbody>
       </table>
    </>
}
}