import React from 'react'
import { NavLink } from "react-router-dom";



function Navbar() {
  
  return (
    <>
      <nav className="navbar navbar-light bg-primary font-weight-bold">
        <NavLink to="/" className="navbar-brand"> <i className="fas fa-address-book pr-2"></i>Contact-App</NavLink>
         <form className="form-inline">
          <NavLink to="/adduser">
           <button className="btn mb-1 text-white" style={{ backgroundColor:"seagreen", border: "none", boxShadow: "0px 0px 8px black" }}>Add Contact</button>
          </NavLink>
        </form>
      </nav>
      </>
      )
}

      export default Navbar;
