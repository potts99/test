import React from 'react';
import {Loader, MessageView} from '../../../@crema';
import {useInfoViewContext} from './InfoViewContext';

const InfoView = () => {
  const {loading, error, message} = useInfoViewContext();

  const showMessage = () => {
    return <MessageView variant='success' message={message.toString()} />;
  };

  const showError = () => {
    return <MessageView variant='error' message={error.toString()} />;
  };

  return (
    <>
      {loading && <Loader />}

      {message && showMessage()}
      {error && showError()}
    </>
  );
};

export default InfoView;
