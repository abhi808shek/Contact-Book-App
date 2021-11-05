import React, { useState, } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'


function AddUser() {
    const [name, setName] = useState("")
    const [phoneNo, setPhoneNo] = useState("")
    const [email, setEmail] = useState("")
    const history = useHistory();
    const info = {
        name:name,
        phone_no:phoneNo,
        email:email
    }

    const addUser =async ()=>{
        const  User = await axios.post(`https://${window.location.hostname}/api/users`,info);
        console.log(User.data);
        history.push(`${window.location.hostname}`);
    }
   
    return (
        <>
            <div className="container rounded mt-5 w-75 h-100 d-flex justify-content-center flex-column" style={{boxShadow:"0px 0px 10px grey"}}>
                <h5 className="bg-danger text-white text-center p-1 rounded-top mt-2">Add Contact</h5>
               
                <label htmlFor="name " className="font-weight-bold">Name</label>
                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} name="name" id="" />
               
                <label htmlFor="phone " className="font-weight-bold my-2">Phone No</label>
                <input type="text" value={phoneNo} onChange={(e)=>{setPhoneNo(e.target.value)}} name="phone" id="" />
               
                <label htmlFor="email " className="font-weight-bold my-2">E-mail</label>
                <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email" id="" />
                <button className="btn btn-info my-3 font-weight-bold" style={{boxShadow:"0px 0px 10px black"}} onClick={addUser}>Add Contact</button>
            </div>

           
           
        </>
    )
}

export default AddUser;
