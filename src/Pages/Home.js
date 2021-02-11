import React, {useState, useEffect} from 'react';
import { Login } from '../Components/Login'
import axios from 'axios';

export const Home = () => {
    const [greeting, setGreeting] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
  
    useEffect(() => {
      axios.get('/api/food')
        .then(response => {
          const result = response.data;
          console.log(result);
          console.log(response.status)
          setGreeting(result);
        })
        .catch((error) => {
          setErrorMessage(error.message);
          console.log(errorMessage);
        });
    }, [])

    return (
        <div>
            <Login />
        </div>
    )
}