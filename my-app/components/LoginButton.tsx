// components/LoginButton.tsx
import React from 'react';
import { useOktaAuth } from '@okta/okta-react';

const LoginButton: React.FC = () => {
  const { oktaAuth } = useOktaAuth(); // This hook provides the OktaAuth instance

  const handleLogin = async () => {
    // Redirect to Okta for authentication
    oktaAuth.signInWithRedirect().catch(err => console.error('Login failed:', err));
  };

  return (
    <button onClick={handleLogin} className="btn">
      Login with Okta
    </button>
  );
};

export default LoginButton;
