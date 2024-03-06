import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import {HomePage, ProductsPage, ReviewsPage, AboutPage} from "../pages";
import React, { useState} from "react";
import "./navbar.css";

function NavBar(props){
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  
return(
<BrowserRouter>
  <div className="navContainMobile">
    <header>
      <div className="navLogo">
        <NavLink to="/">
          <img src="logo.png"/>
        </NavLink>
        </div>
        <button className="menuButton" onClick={handleDrawerOpen}>
          <div></div>
          <div></div>
          <div></div>
          </button>
        </header>

        <nav className={`drawer ${openDrawer ? "open" : ""}`}>
          <div className="closeButton" onClick={handleDrawerClose}>
            X
          </div>
          <ul>
            <li>
              <NavLink to="/products" onClick={handleDrawerClose}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/reviews" onClick={handleDrawerClose}>
                Reviews
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={handleDrawerClose}>
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      
  <div className="navContain">
    <div className="navFlex">
    <div className="navLogo">
      <NavLink to ="/"><img src="logo.png"></img></NavLink>     
    </div>{/*navLogo*/}
    <div className="textLinksContain">
        <NavLink to="products">
          Products
        </NavLink>
  
        <NavLink to="reviews">
          Reviews
        </NavLink>
      
        <NavLink to="about">
          About
        </NavLink>
    </div>{/*linksContain*/}
    </div>{/*navFlex */}
  </div>{/*navContain*/}

  <Routes>
  <Route path="/" element={<HomePage/>}/>

  <Route path="/products"element={<ProductsPage/>}/>

  <Route path="/reviews"element={<ReviewsPage/>}/>

  <Route path="/about"element={<AboutPage/>}/>
  </Routes>
</BrowserRouter> 
)}

export default NavBar;