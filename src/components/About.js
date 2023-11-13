import React from "react";
// import ReactDOM  from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import pic from '../asstes/images/AA.jpg';
import l1 from  '../asstes/images/h.png';
import l2 from  '../asstes/images/c.png';
import logo from  '../asstes/images/j.png';
import l4 from  '../asstes/images/logo512.png';

function About(){
    const skills = {
        color:'transparent',
        width:'30px',
        height:'30px',
        marginLeft:'7px'
    };
    return(
        <>
            <div className="container about-section">
                <div className="row">
                    <div className=" col-sm-12 col-md-6 col-lg-6">
                        <img src={pic} className="img-fluid  a-pic"/>
                    </div>                   
                    <div className=" col-sm-12 col-md-6 col-lg-6">
                        <h1>About Me </h1>
                        <hr/>
                        <h3>MERN Stack Developer | React js | Node js | Express js | MongoDB</h3>

                        <h4>
                        I'm an experienced MERN Stack Software Engineer with a strong track record of delivering high-quality solutions. Dedicated, detail-oriented, and committed to exceeding industry standards. Seeking new opportunities to leverage my skills and contribute to innovative projects.
                        I'm an experienced MERN Stack Software Engineer with a strong track record of delivering high-quality solutions. Dedicated, detail-oriented, and committed to exceeding industry standards. Seeking new opportunities to leverage my skills and contribute to innovative projects.
                        </h4>
                        <hr className="line" style={{height:'3px'}}/>
                        <span className="h4">Skills:<img src={l1} alt="html" style={skills}/>
                            <img src={l2} alt="css" style={skills}/>
                            <img src={logo} alt="js" style={skills} />
                            <img src={l4} alt="react" style={skills}/>
                        </span>
                    </div>                   
                </div>
            </div>
        </>
    )
}
export {About};