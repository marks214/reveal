import React, { useState, useEffect } from 'react';
import { AmplifyAuthenticator, AmplifySignIn, AmplifySignInButton, AmplifySignOut } from '@aws-amplify/ui-react';
import Amplify, { Cache } from 'aws-amplify';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from '../aws-exports';
import { UserProfile } from './UserProfile'
import './Login.css'
Amplify.configure(awsconfig);

// https://docs.amplify.aws/ui/auth/authenticator/q/framework/react#recommended-usage
export const Login = () => {
    const [authState, setAuthState] = useState();
    const [user, setUser] = useState();

    useEffect(() => {
        onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData)
            console.log(nextAuthState)
            console.log(authData)
        });
    }, []);

    return authState === AuthState.SignedIn && user ? (
        <div className="App-link">
            <h1>Hello, {user.username}</h1>
            <div>
                <UserProfile />
            </div>
            <div>
                <AmplifySignOut />
            </div>
        </div>
    ) : (
            <AmplifyAuthenticator />
        );
}


// export const LoginTry = () => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false)

//     const loggedIn = () => {
//         const federatedInfo = Cache.getItem('federatedInfo');
//         const { token } = federatedInfo;
//         console.log(token);
//         console.log('here')
//     }

//     return(
//     <div>
//       <AmplifyAuthenticator>
//       {!isLoggedIn &&
//         <AmplifySignIn 
//         headerText='Range Reveal'
//         onSubmit={console.log('here')}/>
//         }
//     {isLoggedIn && 
//     <AmplifySignOut
//     onClick={() => setIsLoggedIn(false)}/>}
//       </AmplifyAuthenticator> 
//     </div>
//     )
// };

