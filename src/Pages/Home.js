import React, {useState, useEffect} from 'react';
import { UserProfile } from '../Components/UserProfile'
import axios from 'axios';

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
            <hr></hr>
            <UserProfile userData={userData}/>
        </div>
    )
}