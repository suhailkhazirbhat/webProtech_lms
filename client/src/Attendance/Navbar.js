import React,{ useRef } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
import "./Styles/main.css";
import "./screens/css/stylesheet.css";
import { Link } from "react-router-dom";

function Navbar() {
	

	return (
		<header>
      
			<nav>
    <ul>
      <li><a href="/adminlogin"> Signin as  Admin </a></li>
      <li><a href="/teclogin"> Signin as  Teacher </a></li>
      <li><a href="/stulogin"> Signin as  Student </a></li>
      {/* <li><a href="/adminlogin"> Signin as  Admin </a></li> */}
	  <li><div className="ticker">
		  
         
            <marquee>
              <p>
                  Regenerate response
                  defrgthyjuhrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr hbrrrrrrrrrrrrrrrr g
            </p>
            </marquee>
          
          </div></li>
    </ul>
  </nav>
		</header>
	);
}

export default Navbar;
