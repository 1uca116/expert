import { Api } from 'api';
import { MP_API_BASE_URL } from './config';

export const getApi = (baseUrl: string | undefined = MP_API_BASE_URL) => {
  return new Api({
    baseURL: baseUrl,
  });
};
