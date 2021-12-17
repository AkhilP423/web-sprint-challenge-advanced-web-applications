import React from 'react';
import axiosWithAuth from './../utils/axiosWithAuth';

//tasks 1 and 2 done here, post to endpoint + push /login on successful request

const Logout = (props) => {

    axiosWithAuth()
        .post(`http://localhost:5000/api/logout`)
        .then(res => {
            localStorage.removeItem('token');
            props.history.push('/login');
        })
        
        .catch(err => {
            console.log(err);
        })
    
    return(
        <div>
            Logging out.
        </div>
    );
}

export default Logout;

// Task List
// 1. On mount, execute a http request to the logout endpoint. DONE
// 2. On a successful request, remove the token from localStorage and redirect to the login page. DOne