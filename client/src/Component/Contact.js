import React, { useState,useEffect } from 'react'
import Avatar from 'react-avatar';
import { Link } from "react-router-dom";
const Contact = ({contact,check,deltedUser}) => {
    const [checked, setChecked] = useState(false)
    useEffect(() => {
        setChecked(check)
    }, [check])
    return (
        <>
            <tr key={contact._id}>
            <th scope="row" classNameName="px-2"><input type="checkbox" checked={checked} onChange={()=>setChecked(!checked)}/></th>
            <td><Avatar name={contact.name} size="50" round={true} className="mr-2"/>{contact.name}</td>
            <td>{contact.phone_no} </td>
            <td>{contact.email}</td>
            <td>
                <Link to={`/updateuser/${contact._id}`}>
                <i className="fas fa-edit">
                </i>
                </Link>
                <Link>
                <i className="fas fa-trash-alt px-2" onClick={()=>{ 
                if (contact._id){
                    deltedUser(contact._id)
                }; 
                }}>
                </i>
                </Link>
            </td>
        </tr>
        </>
    )
}

export default Contact;
