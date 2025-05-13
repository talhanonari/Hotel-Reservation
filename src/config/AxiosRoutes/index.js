import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;

const loginRequest = async (path, data) => {
  try {
    const response = await axios.post(baseUrl + path, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const postRequest = async (path, headers, data) => {
  try {
    const response = await axios.post(`${baseUrl}${path}`, data, {
      headers: headers,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

const getRequest = async (path, data) => {
  try {
    const response = await axios.get(baseUrl + path, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const delRequest = (path, token, data) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return axios
    .delete(baseUrl + path, { headers, data })
    .then((res) => {
      if (res.status === 200) {
        const message = "Record Deleted Successfully!";
        return message;
      } else {
        throw new Error("Error: " + res.statusText);
      }
    })
    .catch((err) => {
      throw err;
    });
};

const patchRequest = async (path, headers, data) => {
  try {
    const response = await axios.patch(`${baseUrl}${path}`, data, {
      headers: headers,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

const putRequest = async (path, headers, data) => {
  try {
    const response = await axios.put(`${baseUrl}${path}`, data, {
      headers: headers,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export {
  loginRequest,
  getRequest,
  postRequest,
  delRequest,
  patchRequest,
  putRequest,
};
