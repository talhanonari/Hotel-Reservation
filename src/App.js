import React, { useEffect } from 'react';
import { loginAndStoreToken } from './config/Auth/Login';
import { isTokenValid } from './config/Auth/ValidToken';
import Router from "./config/router";
import '../src/Pages/home/Home.css'

function App() {
  useEffect(() => {
    const checkAndLogin = async () => {
  if (!isTokenValid()) {
    await loginAndStoreToken();
  }
};

    checkAndLogin();
  }, []);

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
