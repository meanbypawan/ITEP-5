import { useState } from "react";
import ImageUrls from "./ImageUrl";
export default ()=>{
   let [currentImageIndex,setCurrentImageIndex] = useState(0);
   
//    setInterval(()=>{
//     currentImageIndex++;
//     if(currentImageIndex == ImageUrls.length-1)
//       currentImageIndex = 0;
//     setCurrentImageIndex(currentImageIndex);  
//    },2000); 

   const slideImage = (label)=>{
    if(label=='next'){
      if(currentImageIndex == ImageUrls.length-1)
         currentImageIndex = 0;
      else
         currentImageIndex++;
      setCurrentImageIndex(currentImageIndex);      
    }
    else{
      if(currentImageIndex == 0)
        currentImageIndex = ImageUrls.length-1;
      else
        currentImageIndex--;
      setCurrentImageIndex(currentImageIndex);     
    }
   }
   return <>
      <div className="container-fluid" style={{height:'500px',border:'1px solid red'}}>
        <img src={ImageUrls[currentImageIndex]} style={{width:'100%',height:'100%',position:'absolute'}}/>
        <button onClick={()=>slideImage('previous')} className="btn btn-outline-danger" style={{zIndex:'1', position:'absolute', top:'50%'}}>Previous</button>
        <button onClick={()=>slideImage('next')} className="btn btn-outline-danger" style={{zIndex:'1', position:'absolute', top:'50%',right:'0%'}}>Next</button>
      
      </div> 
   </>   
}