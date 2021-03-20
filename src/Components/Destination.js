import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { UserContext } from '../App';

const Destination = () => {
    const [loggedUser]=useContext(UserContext);
    
    return (
        <div style={{margin:'5%',padding:'5%',textAlign:'justify',color:'blue'}}>
            <h4>Happy Journey,{loggedUser.name ||loggedUser.displayName}</h4>
            <p><Link to="/home"> <h1 style={{color:'red'}}>Back To Home</h1> </Link> </p>
           
        </div>
    );
};

export default Destination;