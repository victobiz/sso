// pages/callback.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useOktaAuth } from '@okta/okta-react';

const Callback = () => {
  const { oktaAuth } = useOktaAuth();
  const router = useRouter();

  useEffect(() => {
    oktaAuth.handleLoginRedirect().then(() => {
      // After handling redirect, check authentication status
      oktaAuth.isAuthenticated().then((isAuthenticated) => {
        if (isAuthenticated) {
          router.push('/dashboard'); // Redirect to dashboard if authenticated
        } else {
          router.push('/login'); // Redirect to login if not authenticated
        }
      });
    }).catch(err => {
      console.error('Error handling the authentication:', err);
      router.push('/login'); // Handle errors by redirecting to login page
    });
  }, [oktaAuth, router]);

  return <p>Loading...</p>;
};

export default Callback;
