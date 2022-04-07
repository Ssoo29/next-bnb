import { AppProps } from "next/app";
import React from "react";
import Header from "../components/Header";
import GlobalStyle from "../styles/GlobalStyles";
import { wrapper } from "../store";

const app = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <div id="root-modal" />
    </>
  );
};

export default wrapper.withRedux(app);
