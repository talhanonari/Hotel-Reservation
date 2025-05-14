export const loginAndStoreToken = async () => {
  try {
    const response = await fetch(`/api/Jwt/v2/Authenticate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'cat.wickets+api@resdiary.com',
        password: 'yZ/&J[!tGKIt[9Ke+[g/sfQ#3h|l8K',
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const { Token, TokenExpiryUtc } = data;

    localStorage.setItem('token', Token);
    localStorage.setItem('token_expiry', TokenExpiryUtc);
    return Token;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};
