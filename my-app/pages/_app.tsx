//import { NextApiRequest, NextApiResponse } from 'next';


/*server side

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { headers } = req;
  const redirectUri = `${headers.origin}/callback`;

  // Configure your Okta settings
  const oktaAuth = new OktaAuth({
    issuer: 'https://dev-13271119.okta.com/oauth2/default',
    clientId: '0oaglttrql8GQ2NvC5d7',
    redirectUri,
    scopes: ['openid', 'profile', 'email']
  });

  // Typically, you'd send a URL to the client to redirect to, as direct redirects might not work here.
  const urlToRedirect = oktaAuth.signInWithRedirect();
  res.redirect(urlToRedirect);
};*/

//client side

// _app.tsx or another global setup file

/*import { OktaAuth } from '@okta/okta-auth-js';

const oktaAuth = new OktaAuth({
  issuer: 'https://dev-13271119.okta.com/oauth2/default',
  clientId: '0oaglttrql8GQ2NvC5d7',
  redirectUri: process.env.NEXT_PUBLIC_REDIRECT_URI || 'http://localhost:3000/callback'
});*/

// pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { Security, LoginCallback } from '@okta/okta-react';
import { useRouter } from 'next/router';

// Import the OktaAuth type for TypeScript type checking
import type { OktaAuth as OktaAuthType } from '@okta/okta-auth-js';


const oktaAuth = new OktaAuth({
  issuer: 'https://dev-13271119.okta.com/oauth2/default',
  clientId: '0oaglttrql8GQ2NvC5d7',
  redirectUri: 'http://localhost:3000/callback',
  scopes: ['openid', 'profile', 'email']
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  // Function to restore the original URI after authentication
  const customRestoreOriginalUri = async (_oktaAuth: OktaAuthType, originalUri: string) => {
    const path = toRelativeUrl(originalUri, window.location.origin); // Properly use toRelativeUrl from '@okta/okta-auth-js'
    router.push(path);
  };

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={customRestoreOriginalUri}>
      <LoginCallback /> // Ensure that the LoginCallback component is used to handle the redirect callback
      <Component {...pageProps} />
    </Security>
  );
}

export default MyApp;
