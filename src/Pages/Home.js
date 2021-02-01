import React, {useState, useEffect} from 'react';
import axios from 'axios';

export const Home = () => {
    const [greeting, setGreeting] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
  
    useEffect(() => {
      axios.get('/')
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
            {greeting.name}
            <hr></hr>
        </div>
    )
}