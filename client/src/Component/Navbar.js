import React from 'react'
import { NavLink } from "react-router-dom";



function Navbar() {
  
  return (
    <>
      <nav className="navbar navbar-light bg-primary font-weight-bold">
        <NavLink to="/" className="navbar-brand"> <i className="fas fa-address-book pr-2"></i>Contact-App</NavLink>
         <form className="form-inline">
          <NavLink to="/adduser">
           <button className="btn my-2 my-sm-0 text-white" type="button">Add Contact</button>
          </NavLink>
        </form>
      </nav>
      </>
      )
}

      export default Navbar;
