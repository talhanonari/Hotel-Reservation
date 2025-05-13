import {loginRequest } from '../AxiosRoutes/index';

export const loginAndStoreToken = async () => {
  try {
    const response = await loginRequest('/Jwt/v2/Authenticate', {
    "username": "cat.wickets+api@resdiary.com",
    "password": "yZ/&J[!tGKIt[9Ke+[g/sfQ#3h|l8K"
});
    const { Token, TokenExpiryUtc } = response;

    localStorage.setItem('token', Token);
    localStorage.setItem('token_expiry', TokenExpiryUtc);
    return Token;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};
