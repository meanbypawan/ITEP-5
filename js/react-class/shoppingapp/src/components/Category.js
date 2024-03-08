import axios from "axios";
import { useEffect, useState } from "react"

export default ()=>{
    const [categoryList,setCategoryList] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/category/list")
        .then(response=>{
            setCategoryList(response.data.categories)
        }).catch(err=>{
            console.log(err);
        })
    },[]);
    return <>
      <div className="container mt-3">
       
       <div className="container-fluid">
        <div className="row">
           {categoryList.map((category,index)=><div className="col-md-2">
              <div className="d-flex justify-content-center align-items-center" style={{fontSize: '12px',height:"50px", margin:"10px", boxShadow: "5px 5px 5px grey"}}>{category.categoryName.toUpperCase()}</div>
           </div>)}  
        </div>
       </div>
       <hr/>
      </div>      
    </>
}