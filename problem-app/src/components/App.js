
import React, { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import background from "../images/background.png";

function App() {

  return (

    <div style={{ 
      backgroundColor: "lightgrey" 
    }}>
    
      <Header/>
     
      <Content/>

    </div>

  );
}

export default App;
