import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./footer.css";

function Footer(props){

return(
  <footer>
    <div className="footerContain">  
      <div className="footerLogo">
      <img src="logo.png"></img>    
      </div>{/*footerLogo*/}
        <div className="contactInfoContain">
          <div className="instagram">
          <a target="_blank href">
            <img src="instagram.png"></img></a>
          </div>{/*instagram*/}

          <div className="email">
          <a target="_blank href">
            <img src="email.png">
            </img></a>
          </div>{/*email*/}
        </div>{/*contactInfoContain*/}
    </div>{/*footerContain*/}
  </footer>
)}



export default Footer;