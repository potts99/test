import httpClient from '../services/ApiConfig';

export const fetchDataApi = (url) => {
  console.log('fetchDataApi', url);
  return new Promise((resolve, reject) => {
    httpClient
      .get(url)
      .then(({data}) => {
        return resolve(data);
      })
      .catch(function (error) {
        console.log('error: ', error);
        return reject(error);
      });
    return Promise.resolve();
  });
};
export const saveDataApi = (url, payload) => {
  console.log('url, payload', url, payload);
  return new Promise((resolve, reject) => {
    httpClient
      .post(url, payload)
      .then(({data}) => {
        return resolve(data);
      })
      .catch(function (error) {
        console.log('error: ', error);
        return reject(error);
      });
    return Promise.resolve();
  });
};
export const updateDataApi = (url, payload) => {
  return new Promise((resolve, reject) => {
    httpClient
      .put(url, payload)
      .then(({data}) => {
        return resolve(data);
      })
      .catch(function (error) {
        console.log('error: ', error);
        return reject(error);
      });
    return Promise.resolve();
  });
};
export const deleteDataApi = (url) => {
  return new Promise((resolve, reject) => {
    httpClient
      .delete(url)
      .then(({data}) => {
        return resolve(data);
      })
      .catch(function (error) {
        console.log('error: ', error);
        return reject(error);
      });
    return Promise.resolve();
  });
};
