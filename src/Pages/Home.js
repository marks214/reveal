import React, {useState, useEffect} from 'react';
import { UserProfile } from '../Components/UserProfile';
import axios from 'axios';
import { AmplifyAuthenticator, AmplifySignIn, AmplifySignInButton, AmplifySignOut } from '@aws-amplify/ui-react';
import './Home.css'

export const Home = ({ user }) => {
    const [userData, setUserData] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    
    useEffect(() => {
      axios.get(`/api/user`)
        .then(response => {
          const result = response.data;
          console.log(result);
          console.log(response.status)
        })
        .catch((error) => {
          setErrorMessage(error.message);
          console.log(errorMessage);
        });
    }, [])

    return (
        <div>
            <h1>{user.username}'s Profile</h1>
            <UserProfile />
            <div className='btn btn-primary'>
                <AmplifySignOut 
                />
            </div>
        </div>
    )
}