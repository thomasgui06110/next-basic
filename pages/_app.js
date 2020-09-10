
import App from "next/app";
const { Component } = require("react");

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};


export default MyApp;
