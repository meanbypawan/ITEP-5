import { useEffect } from "react";

export default ()=>{
    useEffect(()=>{
        console.log("First Flavor (Without Dependency)......");
    });
    useEffect(()=>{
        console.log("Second Flavor (With Dependency Array....)");
    },[]);
    useEffect(()=>{
        console.log("Third Flavor...");
        return ()=>{
            console.log("Third Flavor (For cleanup code.....)");
        }
    });
    useEffect(()=>{
        console.log("Fourth Flavor With Dependcy state");
    },[counter]); 
    return <>
    
    </>
}