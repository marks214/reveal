import axios from'axios';
import Amplify from 'aws-amplify';

// const backend_url = 'http://localhost:5000'
const backend_url = 'https://rangereveal.aimeeoz.com'

const getToken = async () => {
    const session = await Amplify.Auth.currentSession();
    return session.getAccessToken().getJwtToken();
}
const authAxios = axios.create(
    {
        baseURL: backend_url
    }
)

getToken().then(token => {
    authAxios.defaults.headers.Authorization = 'Bearer ' + token;
})

export default authAxios;
