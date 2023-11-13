import React from "react";
import ReactDOM  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import profile from '../asstes/images/profile.jpg';

const Herosection = ()=>{
    return(
        <>
            <div className="container hero-section">
            
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <h1 className="info-text">Hi, Abdullah Here!</h1>
                            <h3 className="subheading">Software Engineer</h3>
                        </div>
                        <div className="col-sm-12 col-md-6 ol-lg-6">
                            <img src={profile} alt="profile" className="img-fluid image"/>
                        </div>
                </div>
            </div>
        </>
    )
};
export default Herosection;
