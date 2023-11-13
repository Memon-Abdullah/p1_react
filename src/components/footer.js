import React from "react";
import  ReactDOM  from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer(){
    return(
        <div style={{backgroundColor:"black",textAlign:"center"}}> 
            <h1 className="text-white">This is Footer</h1>
            <p className="text-danger">made by Abdullah</p>
        </div>
    )
}
export {Footer};