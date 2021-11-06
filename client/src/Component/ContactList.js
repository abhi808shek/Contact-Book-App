import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from "axios";
import Contact from './Contact';
function ContactList() {
    const [contacts, setContact] = useState([])
    const [check, setCheck] = useState(false);

    const getUsersData = async () => {
        try {
            const response = await axios.get(`${window.location.protocol}//${window.location.hostname}/api/users`);
            setContact(response.data);


        } catch (error) {
            console.log(error.message);
        }

    }
    useEffect(() => {
        try {
            getUsersData();
        }
        catch (error) {
           console.log(error.message);
        }
    }, [check]);

    // deleted User
    const deltedUser = async (_id) => {
        await axios.delete(`${window.location.protocol}//${window.location.hostname}/api/users/`+_id);
        getUsersData();
    }
    const contactList = contacts.map((contact) => {
        return (
            <Contact contact={contact} check={check} deltedUser={deltedUser} />
        )
    })
    return (
        <>



            <div className="container mt-5 rounded-top p-2" style={{boxShadow:"0px 0px 10px grey"}} >

                <table className="table" >
                    <thead style={{borderRadius:"10px"}}>
                        <tr className="bg-danger text-white rounded" >
                            <th scope="col">
                                <input type="checkbox" onClick={() => {
                                    setCheck(!check)
                                }} className="mr-1"/>
                                All
                            </th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contactList}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ContactList;
