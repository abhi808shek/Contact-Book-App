import React from 'react'
// import LoginUser from './Component/LoginUser';
// import Register from './Component/Register';

import AddUser from './Component/AddUser';
import ContactList from './Component/ContactList';
import Navbar from './Component/Navbar';
import UpdateUser from './Component/UpdateUser';
import {BrowserRouter as Router , Switch,Route} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={ContactList}/>
        <Route path="/adduser" component={AddUser}/>
        <Route path="/updateuser/:id" component={UpdateUser}/>

      </Switch>
    </Router> 
   {/* <Register />
    <LoginUser /> */}
    </>
  )
}

export default App;
