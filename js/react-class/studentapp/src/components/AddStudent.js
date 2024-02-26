import { Component } from "react";

export default class AddStudent extends Component {
   
    render() {
        const {addNewRecord,studentList,updateBranch} = this.props;
        return <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input ref={(rollInput) => this.roll = rollInput} type='text' placeholder='Student Roll Number' className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input ref={(nameInput) => this.name = nameInput} type='text' placeholder='Enter Student Name' className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <select ref={(branchInput) => this.branch = branchInput} className="form-control">
                                <option>Select Branch</option>
                                <option value="CS">CS</option>
                                <option value="IT">IT</option>
                                <option value="EC">EC</option>
                                <option value="MECH">MECH</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input ref={(mobileInput) => this.mobile = mobileInput} type='text' placeholder='Enter contact number' className="form-control" />
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-6">
                        <button onClick={()=>addNewRecord(this.roll.value,this.name.value,this.branch.value,this.mobile.value)} className="btn btn-secondary">ADD</button>
                    </div>
                    <div className="col-md-6 d-flex">
                        <button onClick={() => updateBranch("CS")} className="btn btn-primary ml-2">CS : ({studentList.filter((student) => student.branch == "CS").length})</button>
                        <button onClick={() => updateBranch("IT")} className="btn btn-danger ml-2">IT : ({studentList.filter((student) => student.branch == "IT").length})</button>
                        <button onClick={() => updateBranch("EC")} className="btn btn-info ml-2">EC : ({studentList.filter((student) => student.branch == "EC").length})</button>
                        <button onClick={() => updateBranch("MECH")} className="btn btn-warning ml-2">MECH : ({studentList.filter((student) => student.branch == "MECH").length})</button>
                        <button onClick={() => updateBranch("all")} className="btn btn-secondary ml-2">Total : ({studentList.length})</button>
                    </div>
                </div>
            </div>
        </>
    }
}