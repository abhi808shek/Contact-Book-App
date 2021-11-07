import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { useHistory } from 'react-router';

function UpdateUser(props) {
    const history = useHistory();
    const { id } = useParams();
    const [name, setName] = useState("")
    const [phoneNo, setPhoneNo] = useState("")
    const [email, setEmail] = useState("")
    useEffect(() => {
        let userDetails = async () => {
        
            const userGetById = await axios.get(`http://localhost:8000/api/users/${id}`)
            console.log("USERDATA", userGetById.data);
            setName(userGetById.data.name)
            setPhoneNo(userGetById.data.phone_no)
            setEmail(userGetById.data.email)
        }
        userDetails()
    }, [id])

    const details = {
        name: name,
        phone_no: phoneNo,
        email: email
    }
    const updateUser = async (id) => {
        try {
            const xyz = await axios.patch(`${window.location.protocol}/${window.location.hostname}/api/users/${id}`,details);
            history.push("/");

        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <>
            <div className="container rounded mt-5 w-75 d-flex justify-content-center flex-column" style={{ boxShadow: "0px 0px 10px grey" }}>
                <h5 className="bg-warning text-white text-center p-1 rounded-top mt-2">Update Contact</h5>

                <label htmlFor="name " className="font-weight-bold">Name</label>
                <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} name="name" id="" />

                <label htmlFor="phone " className="font-weight-bold my-2">Phone No</label>
                <input type="text" value={phoneNo} onChange={(e) => { setPhoneNo(e.target.value) }} name="phone" id="" />

                <label htmlFor="email " className="font-weight-bold my-2">E-mail</label>
                <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} name="email" id="" />
                <button className="btn bg-success text-white my-3 font-weight-bold" style={{ boxShadow: "0px 0px 10px black" }} onClick={
                   ()=>{ updateUser(id)}
                }>Update Contact</button>
            </div>
        </>
    )
}

export default UpdateUser
