import axios from 'axios';

export const loginAndStoreToken = async () => {
try {
  const response = await axios.post(
    `/api/Jwt/v2/Authenticate`,
    {
      username: 'cat.wickets+api@resdiary.com',
      password: 'yZ/&J[!tGKIt[9Ke+[g/sfQ#3h|l8K',
    }
  );

  const { Token, TokenExpiryUtc } = response.data;

  localStorage.setItem('token', Token);
  localStorage.setItem('token_expiry', TokenExpiryUtc);
  return Token;
} catch (error) {
  console.error('Login failed:', error);
  throw error;
}

};
