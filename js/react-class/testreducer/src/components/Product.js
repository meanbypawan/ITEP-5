import axios from "axios";
import { useEffect, useReducer } from "react";

const Product = () => {
    const [state, dispatch] = useReducer((state, action) => {
        if (action.type === "set-product") {
            return { ...state, productList: action.payload };
        }
        else if (action.type === "delete-product") {
            if (window.confirm("Are you sure ?")){
                state.productList.splice(action.payload, 1
                    );
            }
            return {...state};
        }
    }, { productList: [] });

    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then(response => {
                dispatch({ type: "set-product", payload: response.data.products });
            }).catch(err => {
                console.log(err);
            })
    }, []);
    return <>
        <h3>Product Component..</h3>
        <table className="table">
            <thead>
                <tr>
                    <th>S.no</th>
                    <th>Title</th>
                    <th>Brand</th>
                    <th>Price</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {state.productList?.map((product, index) => <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{product.title}</td>
                    <td>{product.brand}</td>
                    <td>{product.price}</td>
                    <td onClick={() => dispatch({ type: "delete-product", payload: index })}><button className="btn btn-outline-danger">Delete</button></td>
                </tr>)}
            </tbody>
        </table>
    </>
}

export default Product;