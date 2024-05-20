import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Auth0Provider } from '@auth0/auth0-react';



const root = ReactDOM.createRoot(document.getElementById('root'));


//

root.render(
 <>
 
<React.StrictMode>
<Auth0Provider
    domain="dev-qe401f841z8i775s.us.auth0.com"
    clientId="CgzulJopQWDyD9OTWUKmYJcB5Qw4u76y"
    authorizationParams={{
      redirect_uri: "https://fghdr96.github.io/my-app"
    }}
  >
  <App />
</Auth0Provider>
</React.StrictMode>

  </>
);

