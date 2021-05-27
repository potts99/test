import httpClient from './ApiConfig';

const MockAdapter = require('axios-mock-adapter');

export default new MockAdapter(httpClient, {delayResponse: 200});
