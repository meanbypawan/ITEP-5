import { Link, Outlet } from "react-router-dom";

const Product = ()=>{
    return <>
      <h1>Product Component...</h1>
      <hr/>
      <p>fdklf fdklf rereoi cvvnm, repowr</p>
      <div>
        <Link to="">New Product</Link> &nbsp;&nbsp;&nbsp;
        <Link to="feature-product">Feature Product</Link>
      </div>
      <div className="mt-5">
        <Outlet/>
      </div>
    </>
}

export default Product;