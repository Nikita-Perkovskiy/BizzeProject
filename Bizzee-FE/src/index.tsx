import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyles } from "@mui/material";
import Helmet from "react-helmet";
import { globalStyles } from "config/styles/GlobalStyle";
import { PageRoot } from "pages/PageRoot";
import { Provider } from "react-redux";
import store from "./store";
import { Theme } from "config/styles/Theme";
import "react-toastify/ReactToastify.min.css";
import "./styles.css";

const appGlobalStyles = <GlobalStyles styles={globalStyles} />;
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <Provider store={store}>
    <Helmet title="Bizzee" />
    <Theme>
      {appGlobalStyles}
      <PageRoot />
    </Theme>
  </Provider>,
);
