import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './UserSubmissionForm.css'

export const Login = ( {backend_url} ) => {
    const [user, setUser] = useState();const [errorMessage, setErrorMessage] = useState(null);
    const loginUser = () => {
        fetch('http://localhost:5000/api/sign_in', {
            mode: 'no-cors',
            redirect: 'follow',
            follow: '20'
        })
        .then(response => {
          const result = response;
          console.log(result);
          setUser(result);
        })
        .catch((error) => {
          setErrorMessage(error.message);
          console.log(errorMessage);
        })
      }
    return (
        <div>
            <button onClick={loginUser}>Test</button>
        </div>
    )
}