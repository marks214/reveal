import { Auth } from 'aws-amplify';

export const isSignedIn = () => {
    const user = Auth.currentAuthenticatedUser()
    console.log(`user: ${user}`);
    return user;
}
