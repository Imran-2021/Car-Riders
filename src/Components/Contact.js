import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div style={{margin:'5%',padding:'5%',textAlign:'center',color:'blue'}}>
            <h4>Contact Us for Better Jurney ! </h4>
           <span style={{fontWeight:'bold'}}>login here - </span> 
                <Link className="btn btn-success" to="/login">Log In</Link>
            
        </div>
    );
};

export default Contact;