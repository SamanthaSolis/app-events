import Cookies from 'universal-cookie';
import axios from 'axios';

const baseUrl = `http://localhost:3001`;
const httpGet = async (endpoint, requestData) => {
  const cookies = new Cookies();
  const auth_token = cookies.get('access_token');
  try {
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: 'get',
      headers: new Headers({
        Authorization: `Bearer ${auth_token}`,
      }),
    });
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const httpPost = async (endpoint, data, requiresAuth = true) => {
  try {
    const headers = {
      Accept: 'application/json',
    };
    if (requiresAuth) {
      const cookies = new Cookies();
      const auth_token = cookies.get('access_token');
      headers['Authorization'] = `Bearer ${auth_token}`;
    }
    const response = await axios.post(`${baseUrl}/${endpoint}`, data, {
      timeout: 1000,
      headers: headers,
      withCredentials: false,
    });
    return await response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const httpPut = async (endpoint, data, requiresAuth = true) => {
  try {
    const headers = {
      Accept: 'application/json',
    };
    if (requiresAuth) {
      const cookies = new Cookies();
      const auth_token = cookies.get('access_token');
      headers['Authorization'] = `Bearer ${auth_token}`;
    }
    const response = await axios.put(`${baseUrl}/${endpoint}`, data, {
      timeout: 1000,
      headers: headers,
      withCredentials: false,
    });
    return await response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { httpGet, httpPost, httpPut };
