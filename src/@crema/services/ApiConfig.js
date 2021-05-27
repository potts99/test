import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://crema-mongo-api.herokuapp.com/api/', //YOUR_API_URL HERE
  headers: {
    'Content-Type': 'application/json',
  },
});
httpClient.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response && err.response.data.msg === 'Token is not valid') {
      console.log('Need to logout user');
      // store.dispatch({type: LOGOUT});
    }
    return Promise.reject(err);
  },
);
export const setAuthToken = (token) => {
  if (token) {
    httpClient.defaults.headers.common['x-auth-token'] = token;
    localStorage.setItem('token', token);
  } else {
    delete httpClient.defaults.headers.common['x-auth-token'];
    localStorage.removeItem('token');
  }
};

export default httpClient;
