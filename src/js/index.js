//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import Proptypes from "prop-types";

let count = 0;
setInterval(function () {
    const six =   Math.floor(count/100000);
    const five =  Math.floor(count/10000);
    const four =  Math.floor(count/1000);
    const three = Math.floor(count/100);
    const two =   Math.floor(count/10);
    const one =   Math.floor(count/1);
    count ++;

		 ReactDOM.render(<Home digit1={one} digit2={two} digit3={three} digit4={four} digit5={five} digit6={six} />,
         document.querySelector("#app"));
},1000);
