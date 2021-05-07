import mock from './MockConfig';
import './auth'; //include auth initial config

mock.onAny().passThrough();
