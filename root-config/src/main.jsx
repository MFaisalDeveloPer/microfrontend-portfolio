import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";

import App from "./App";
import { store } from "./store/Store";
import ThemeWrapper from "./theme/ThemeWrapper";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="195638694422-dlaioi7hi4057pekt9s16b5s3jjbdrlj.apps.googleusercontent.com">
      <Provider store={store}>
        <ThemeWrapper>
          <App />
        </ThemeWrapper>
      </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);