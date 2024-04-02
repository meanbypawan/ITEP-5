import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCategory, deleteCategory, fetchCategory } from "../redux-config/CategorySlice";

const Category = ()=>{
    const [categoryName,setCategoryName] = useState("");
    const {categoryList,isLoading,error} = useSelector((store)=>store.Category);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchCategory());
    },[])
    const removeCategory = (index)=>{
       // Make api call to delete data from server
       // if delete successfully then remove data from redux state
       dispatch(deleteCategory(index));
    }
    const add = ()=>{
        // Make api call to save category in database
        // then update in redux state
        dispatch(addCategory(categoryName));
    }
    return <>
      <div className="container mt-2">
       <div className="form-group">
          <input onChange={(event)=>setCategoryName(event.target.value)} type="text" placeholder="Enter Category Name" /> 
          <button  onClick={add} className=" ml-2 btn btn-sm btn-success">Add</button>
       </div> 
      <h1>Categories..</h1>
      <table className="table mt-5">
        <thead>
          <tr>  
           <th>S.no</th>
           <th>Category name</th>
           <th>Delete</th>
          </tr> 
        </thead>
        <tbody>
            {categoryList?.map((categoryName,index)=><tr key={index}>
                <td>{index+1}</td>
                <td>{categoryName}</td>
                <td><button onClick={()=>removeCategory(index)} className="btn btn-outline-danger">Delete</button></td>
            </tr>)}
        </tbody>
      </table>
      </div>
    </>
}

export default Category;