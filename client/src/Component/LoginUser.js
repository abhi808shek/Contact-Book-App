import React, { useState, } from 'react'
import axios  from "axios";

function LoginUser() {
 
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signInInfo = {
        email:email,
        password:password
    }

    const userLogin = async ()=>{
        try {
         const signIndata = await axios.post("/auth",signInInfo)
            console.log(signIndata.data);
        } catch (error) {
            console.log(error.message);
        }
    }
   
    return (
        <>
            <div className="container rounded mt-5 w-75 h-100 d-flex justify-content-center flex-column" style={{boxShadow:"0px 0px 10px grey"}}>
                <h5 className="bg-danger text-white text-center p-1 rounded-top mt-2">Sign In</h5>
               
                
                <label htmlFor="email " className="font-weight-bold my-2">E-mail</label>
                <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email" id="" />
               
                <label htmlFor="phone " className="font-weight-bold my-2">Password</label>
                <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}} name="phone" id="" />
               
              
                <button className="btn btn-info my-3 font-weight-bold" style={{boxShadow:"0px 0px 10px black"}} onClick={userLogin}>Login</button>
            </div>
        
        </>
    )
}

export default LoginUser;
