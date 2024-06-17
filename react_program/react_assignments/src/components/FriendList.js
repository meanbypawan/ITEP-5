import { useReducer, useRef } from "react";
import FriendList from "./FriendData.js";
export default () => {
    const [friendList, dispatch] = useReducer((state, action) => {
       if(action.type == "add"){
         let newFriend = action.payload;
         state.push(newFriend);
         return [...state];
       }
       else if(action.type == "remove"){
          if(window.confirm("Do you want to delete it ?")){
           state.splice(action.payload,1);
           return [...state];
          }
       }
       return state;
    }, FriendList);

    let nameInput = useRef();
    let aboutInput = useRef(); 
    const addFriend = ()=>{
        let name = nameInput.current.value;
        let about = aboutInput.current.value;
        dispatch({type:"add",payload:{name,about}})
    }
    return <>
        <div className="container mt-3 mb-3">
            <div className="row">
                <div className="col-md-5">
                    <div className="form-group">
                        <label>Write your friend name</label>
                        <input ref={nameInput} type="text" className="form-control" />
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="form-group">
                        <label>About your friend</label>
                        <input ref={aboutInput} type="text" className="form-control" />
                    </div>
                </div>
                <div className="col-md-2 mt-4">
                   <div className="form-group"> 
                    <button onClick={addFriend} className="btn btn-success">ADD</button>
                   </div>
                </div>
            </div>
        </div>
        <div className="container">
            {friendList?.map((friend, index) => <div key={index} className="row bg-dark text-white mt-2">
                <div className="col-md-9 d-flex flex-column justify-content-center">
                    <h3 style={{ margin: 0 }}>{friend.name}</h3>
                    <small>{friend.about}</small>
                </div>
                <div className="col-md-3 d-flex justify-content-end align-items-center">
                    <button onClick={()=>dispatch({type:"remove",payload: index})} className="btn btn-danger">DELETE</button>
                </div>
            </div>)}

        </div>
    </>
}