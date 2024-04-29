import cookies from "js-cookies"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const ProtectedRoute = (props) => {
    const { Component } = props;
    const token= cookies.getItem("jwtToken")
    
    const Navigate= useNavigate()

    // console.log(token);

        useEffect(()=>{

            if (token===null) {
                Navigate("/login")
            }

        },[])
 

  return(
    <Component/>
  )
};

export default ProtectedRoute;
