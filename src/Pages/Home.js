import React, {useState, useEffect} from 'react';
import { Login } from '../Components/Login'
import axios from 'axios';
import './Home.css'

export const Home = () => {
    const [userData, setUserData] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const backend_url = 'http://localhost:5000' //'https://rangereveal.aimeeoz.com'
    
    useEffect(() => {
      axios.get(`${backend_url}/api/curr_user`)
        .then(response => {
          const result = response.data;
          console.log(result);
          console.log(response.status)
          // setUserData(result);
        })
        .catch((error) => {
          setErrorMessage(error.message);
          console.log(errorMessage);
        });
    }, [])

    return (
        <div>
            {userData}
            <Login />
        </div>
    )
}