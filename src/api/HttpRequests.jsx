import axios from 'axios';

var baseUrl = `http://localhost:3001`;
var httpGet = async (endpoint, requestData) => {
  try {
    const response = await fetch(`${baseUrl}/${endpoint}`, requestData || {});
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

var httpPost = async (endpoint, data) => {
  try {
    const response = await axios.post(`${baseUrl}/${endpoint}`, data, {
      timeout: 10000,
      withCredentials: false,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    return await response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { httpGet, httpPost };
