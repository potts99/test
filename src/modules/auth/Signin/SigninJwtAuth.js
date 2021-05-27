import React, {useContext} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Checkbox} from '@material-ui/core';
import {Form, Formik, useField} from 'formik';
import * as yup from 'yup';

import InfoView from '@crema/core/InfoView';
import {Link, useHistory} from 'react-router-dom';
import Box from '@material-ui/core/Box';
import IntlMessages from '../../../@crema/utility/IntlMessages';
import {useIntl} from 'react-intl';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import {Fonts} from '../../../shared/constants/AppEnums';
import {fetchDataApi, saveDataApi} from '../../../@crema/utility/APIHooks';
import {setAuthToken} from '../../../@crema/services/ApiConfig';
import {defaultUser} from '../../../shared/constants/AppConst';
import AppContext from '../../../@crema/utility/AppContext';
import {useInfoViewActionsContext} from '../../../@crema/core/InfoView/InfoViewContext';
import grey from '@material-ui/core/colors/grey';
import Auth0Config from '@crema/services/auth0/auth0Config';

const useStyles = makeStyles((theme) => ({
  formRoot: {
    textAlign: 'left',
    [theme.breakpoints.up('xl')]: {
      marginBottom: 24,
    },
  },
  myTextFieldRoot: {
    width: '100%',
  },
  checkboxRoot: {
    marginLeft: -12,
  },
  pointer: {
    cursor: 'pointer',
  },
  btnRoot: {
    borderRadius: theme.overrides.MuiCard.root.borderRadius,
    width: '10rem',
    fontWeight: Fonts.REGULAR,
    fontSize: 16,
    textTransform: 'capitalize',
  },
  btnRootFull: {
    width: '100%',
  },
  dividerRoot: {
    marginBottom: 16,
    marginLeft: -48,
    marginRight: -48,
    [theme.breakpoints.up('xl')]: {
      marginBottom: 32,
    },
  },
  textPrimary: {
    color: theme.palette.text.primary,
  },
  colorTextPrimary: {
    color: theme.palette.primary.main,
  },
  underlineNone: {
    textDecoration: 'none',
  },
  textGrey: {
    color: theme.palette.grey[500],
  },
}));
const MyTextField = (props) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <TextField
      {...props}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  );
};

const validationSchema = yup.object({
  email: yup
    .string()
    .email(<IntlMessages id='validation.emailFormat' />)
    .required(<IntlMessages id='validation.emailRequired' />),
  password: yup
    .string()
    .required(<IntlMessages id='validation.passwordRequired' />),
});

const SigninJwtAuth = (props) => {
  const history = useHistory();
  const {updateAuthUser} = useContext(AppContext);
  const {fetchStart, fetchSuccess, fetchError} = useInfoViewActionsContext();
  const {messages} = useIntl();

  const classes = useStyles(props);

  const onGoToForgetPassword = () => {
    history.push('/forget-password', {tab: 'jwtAuth'});
  };
  const onSignInAuth0User = async () => {
    fetchStart();
    try {
      const auth0 = await Auth0Config();
      await auth0.loginWithPopup({});
      auth0
        .getUser()
        .then((user) => {
          fetchSuccess();
          setAuthToken(user.sub);
          updateAuthUser({
            uid: user.sub,
            displayName: user.name,
            email: user.email,
            photoURL: user.picture,
            token: user.sub,
          });
        })
        .catch((error) => {
          fetchError(error.message);
        });
    } catch (error) {
      fetchError(error.message);
    }
  };

  const onSigninUser = (data) => {
    fetchStart();
    saveDataApi(`auth`, data)
      .then((data) => {
        console.log('data: ', data);
        setAuthToken(data.token);
        fetchDataApi('auth')
          .then((data) => {
            console.log('data: ', data);
            updateAuthUser({
              displayName: data.name,
              email: data.email,
              role: defaultUser.role,
              token: data._id,
              photoURL: data.avatar,
            });
            fetchSuccess();
          })
          .catch((error) => fetchError(error.message));
      })
      .catch((error) => fetchError(error.message));
  };

  return (
    <Box flex={1} display='flex' flexDirection='column'>
      <Box
        px={{xs: 6, sm: 10, xl: 15}}
        pt={8}
        flex={1}
        display='flex'
        flexDirection='column'>
        <Formik
          validateOnChange={true}
          initialValues={{
            email: 'crema.demo@gmail.com',
            password: 'Pass@1!@all',
          }}
          validationSchema={validationSchema}
          onSubmit={(data, {setSubmitting}) => {
            setSubmitting(true);
            onSigninUser({email: data.email, password: data.password});
            setSubmitting(false);
          }}>
          {({isSubmitting}) => (
            <Form className={classes.formRoot} noValidate autoComplete='off'>
              <Box mb={{xs: 5, xl: 8}}>
                <MyTextField
                  placeholder={messages['common.email']}
                  name='email'
                  label={<IntlMessages id='common.email' />}
                  variant='outlined'
                  className={classes.myTextFieldRoot}
                />
              </Box>

              <Box mb={{xs: 3, xl: 4}}>
                <MyTextField
                  type='password'
                  placeholder={messages['common.password']}
                  label={<IntlMessages id='common.password' />}
                  name='password'
                  variant='outlined'
                  className={classes.myTextFieldRoot}
                />
              </Box>

              <Box
                mb={{xs: 3, xl: 4}}
                display='flex'
                flexDirection={{xs: 'column', sm: 'row'}}
                alignItems={{sm: 'center'}}
                justifyContent={{sm: 'space-between'}}
                fontSize={15}>
                <Box display='flex' alignItems='center'>
                  <Checkbox className={classes.checkboxRoot} />
                  <Box className={classes.textGrey} component='span'>
                    <IntlMessages id='common.rememberMe' />
                  </Box>
                </Box>
                <Box
                  color='primary.main'
                  component='span'
                  ml={{sm: 4}}
                  className={classes.pointer}
                  onClick={onGoToForgetPassword}
                  fontSize={15}>
                  <IntlMessages id='common.forgetPassword' />
                </Box>
              </Box>

              <Box
                mb={6}
                display='flex'
                flexDirection={{xs: 'column', sm: 'row'}}
                alignItems={{sm: 'center'}}
                justifyContent={{sm: 'space-between'}}>
                <Button
                  variant='contained'
                  color='secondary'
                  type='submit'
                  disabled={isSubmitting}
                  className={classes.btnRoot}>
                  <IntlMessages id='common.login' />
                </Button>

                <Box
                  ml={{xs: 0, sm: 4}}
                  mt={{xs: 3, sm: 0}}
                  className={classes.textGrey}
                  fontSize={15}>
                  <Box component='span' mr={2}>
                    <IntlMessages id='common.dontHaveAccount' />
                  </Box>
                  <Box component='span'>
                    <Link
                      to='/signup'
                      className={clsx(
                        classes.underlineNone,
                        classes.colorTextPrimary,
                      )}>
                      <IntlMessages id='common.signup' />
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
      <Box
        bgcolor={grey[100]}
        px={{xs: 6, sm: 10, xl: 15}}
        py={{xs: 3, xl: 4}}
        display='flex'
        justifyContent='center'
        alignItems='center'>
        <Button
          variant='contained'
          color='primary'
          className={clsx(classes.btnRoot, classes.btnRootFull)}
          onClick={onSignInAuth0User}>
          <IntlMessages id='auth.loginWithAuth0' />
        </Button>
      </Box>

      <InfoView />
    </Box>
  );
};

export default SigninJwtAuth;
