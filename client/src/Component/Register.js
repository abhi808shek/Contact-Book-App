import React, { useState, } from 'react'
import axios from 'axios'
// import { useHistory } from 'react-router-dom'



function Register() {
    const [names, setNames] = useState("")
    const [emails, setEmails] = useState("")
    const [password, setPassword] = useState("")
    const [Cpassword, setConfirmPassword] = useState("")

    // const history = useHistory();
    const registerDetails = {
        name:names,
        email:emails,
        password:password,
        Confirmpassword:Cpassword
    }

    const registerUser =async ()=>{
        try {
            const task = await axios.post(`/register`,registerDetails);
        console.log(task.data);
        // history.push("/");
        } catch (error) {
            console.log(error.message);
        }
    }
   
    return (
        <>
            <div className="container rounded mt-5 w-75 h-100 d-flex justify-content-center flex-column" style={{boxShadow:"0px 0px 10px grey"}}>
                <h5 className="bg-danger text-white text-center p-1 rounded-top mt-2">Register</h5>
               
                <label htmlFor="name " className="font-weight-bold">Name</label>
                <input type="text" value={names} onChange={(e)=>{setNames(e.target.value)}} name="name" id="" />
               
                <label htmlFor="email " className="font-weight-bold my-2">E-mail</label>
                <input type="email" value={emails} onChange={(e)=>{setEmails(e.target.value)}} name="email" id="" />
               
                <label htmlFor="phone " className="font-weight-bold my-2">Password</label>
                <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}} name="phone" id="" />
               
                <label htmlFor="phone " className="font-weight-bold my-2">Confirm Password</label>
                <input type="text" value={Cpassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} name="phone" id="" />
               
                <button className="btn btn-info my-3 font-weight-bold" style={{boxShadow:"0px 0px 10px black"}} onClick={registerUser}>Submit</button>
            </div>
        
        </>
    )
}

export default Register;
