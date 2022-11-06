import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
  domain="dev-zrsnv5a03idxbc2c.us.auth0.com"
  clientId="AtYsiasqKpRbtL9BfA5ElTHAWndryfqM"
  redirectUri={window.location.origin}
>
  <App />
</Auth0Provider>
);
