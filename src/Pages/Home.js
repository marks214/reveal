import React, {useState, useEffect} from 'react';
import { Login } from '../Components/Login'
import { UserProfile } from '../Components/UserProfile';
import authAxios from '../utils/authAxios';
import { AmplifyAuthenticator, AmplifySignIn, AmplifySignInButton, AmplifySignOut } from '@aws-amplify/ui-react';
import './Home.css'

export const Home = ({ user }) => {
    const [userData, setUserData] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    
    useEffect(() => {
      authAxios.get(`/api/curr_user`)
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
            <h1>{user.storage.REACT_TOKEN_AUTH_KEY} Profile</h1>
            <UserProfile />
            <div>
                <AmplifySignOut />
            </div>
        </div>
    )
}