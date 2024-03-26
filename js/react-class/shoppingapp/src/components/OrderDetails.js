import { useNavigate } from "react-router-dom";

const OrderDetails = ()=>{
    const navigate = useNavigate();
    return <>
      <div className="form-group">
        <input type="text" placeholder="Enter name" className="form-control"/>
      </div>
      <div className="form-group">
        <input type="text" placeholder="Enter contact number" className="form-control"/>
      </div>
      <div className="form-group">
        <input type="text" placeholder="Enter delivery address" className="form-control"/>
      </div>
      <div className="form-group">
        <button className="btn btn-danger" onClick={()=>navigate(-1)}>Cancel</button>
        <button className="btn btn-success ml-2">Go</button>
      </div>
    </>
}

export default OrderDetails;