
import React, { useState} from "react";
import icon from "../images/icon.png";

const Header = () =>{
    return (

      <div className="ui menu">          
            <div className="item">
              <img  src={icon} alt="icon"/>Problem Space
            </div>
     
            <div className="right menu">
              <a className="active red item">Add your Problems</a>
              <a className="item">Problem Lists</a>
              <a className="item">Sign Up</a>
              <a className="item">Login</a>
              
            </div>
        
        
            {/* <div className="ui container">
              <h1>Welcome  to Problem Space!!</h1>
            </div> */}
            {/* </div> */}
      </div>
        
      );
}


 


export default Header;
