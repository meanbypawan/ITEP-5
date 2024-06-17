export default ()=>{
    return <>
       <div className="container mt-2">
          <div className="row">
            <div className="col-md-4">
                <label>Enter roll number</label>
                <input type="text" className="form-control"/>
            </div>
            <div className="col-md-4">
                <label>Enter name</label>
                <input type="text" className="form-control"/>
            </div>
            <div className="col-md-4">
                <label>Enter email</label>
                <input type="email" className="form-control"/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
                <label>Curent city</label>
                <select className="form-control">
                    <option value='0'>select city</option>
                    <option value="Indore">Indore</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                </select>
            </div>
            <div className="col-md-4">
                <label>Branch</label>
                <select className="form-control">
                    <option value='0'>select branch</option>
                    <option value="CS">CS</option>
                    <option value="IT">IT</option>
                    <option value="EC">EC</option>
                </select>
            </div>
            <div className="col-md-4">
                <label>Physics Marks</label>
                <input type="number" className="form-control"/>
            </div>
            <div className="col-md-4">
                <label>Chemistry Marks</label>
                <input type="number" className="form-control"/>
            </div>
            <div className="col-md-4">
                <label>Math marks</label>
                <input type="number" className="form-control"/>
            </div>
          </div>
       </div>
    </>
}