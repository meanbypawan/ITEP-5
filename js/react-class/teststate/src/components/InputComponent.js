import { Component } from "react";

export default class InputComponent extends Component{
    constructor(){
        super();
        this.state = {
            message: "Default Message"
        }
    }
    showMessage = ()=>{
      this.setState({message: document.getElementById("data").value});
    }
    render(){
        return <>
          <div className="container">
             <div className="row">
                <div className="col-12">
                    <div className="form-group">
                        <input id="data" type="text" placeholder="Enter Any Message" className="form-control"/>
                    </div>
                </div>
                <button onClick={this.showMessage} className="mt-3 btn btn-outline-danger">Show Message</button>
                <h2 className="mt-3">{this.state.message}</h2>
             </div>
          </div>         
        </>
    }
}