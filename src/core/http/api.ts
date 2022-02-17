import axios from 'axios';

export interface BaseHeaders {
  'Request-Type'?: string;
  'Content-Type': string;
  Accept: string;
}

export type ApiOptions = {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'PATCH';
  params?: { [key: string]: any };
  headers?: BaseHeaders;
};

const DEFAULT_HEADERS: BaseHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

const DEFAULT_PARAMS = {
  TimeZone: new Date().getTimezoneOffset(),
};

export const callAPI = async ({ url, method, params }: ApiOptions) => {
  const headers = { ...DEFAULT_HEADERS };
  const body = { ...DEFAULT_PARAMS, ...params };
  const defaultMethod = 'GET';

  return await axios({
    url,
    method: method || defaultMethod,
    headers,
    params: JSON.stringify(body),
  });
};
