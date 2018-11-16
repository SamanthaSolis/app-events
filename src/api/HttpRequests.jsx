var baseUrl = `http://localhost:3001`;
var httpGet = async endpoint => {
  try {
    const response = await fetch(`${baseUrl}/${endpoint}`);
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

export { httpGet };
