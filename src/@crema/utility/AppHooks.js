import {useContext, useEffect, useState} from 'react';
import {AuthType} from '../../shared/constants/AppEnums';
import {defaultUser} from '../../shared/constants/AppConst';
import jwtAxios from '../services/ApiConfig';
import httpClient from '../services/ApiConfig';
import AppContext from './AppContext';
import {useInfoViewActionsContext} from '../core/InfoView/InfoViewContext';
// import Auth0Config from '../services/auth0/auth0Config';

export const useAuthToken = () => {
  const [loading, setLoading] = useState(true);
  const {user, updateAuthUser} = useContext(AppContext);
  const {fetchStart, fetchSuccess} = useInfoViewActionsContext();

  useEffect(() => {
    // const validateAuth0User = async () => {
    //   const auth0 = await Auth0Config();
    //   console.log('auth0: ', auth0);
    //   try {
    //     const accessToken = await auth0.getTokenSilently();
    //     console.log('accessToken: ', accessToken);
    //   } catch (error) {
    //     if (error.error !== 'login_required') {
    //       console.log('accessToken: ', error.error);
    //       // throw error;?
    //     }
    //   }
    //   fetchSuccess();
    // };

    const validateAuth = async () => {
      fetchStart();
      const token = localStorage.getItem('token');
      if (!token) {
        fetchSuccess();
        return;
      }
      console.log('token: ', token);
      httpClient.defaults.headers.common['x-auth-token'] = token;
      try {
        const res = await jwtAxios.get('/auth');
        fetchSuccess();

        console.log('res : ', res);
        updateAuthUser({
          authType: AuthType.JWT_AUTH,
          displayName: res.data.name,
          email: res.data.email,
          role: defaultUser.role,
          token: res.data._id,
          photoURL: res.data.avatar,
        });
        return;
      } catch (err) {
        fetchSuccess();
        console.log('err: ', err);
        return;
      }
    };

    const checkAuth = () => {
      Promise.all([validateAuth()]).then(() => {
        setLoading(false);
      });
    };
    checkAuth();
  }, [updateAuthUser, fetchSuccess, fetchStart]);

  return [loading, user];
};

export const useAuthUser = () => {
  const {user} = useContext(AppContext);

  if (user) {
    return {id: 1, ...user};
  }
  return null;
};
