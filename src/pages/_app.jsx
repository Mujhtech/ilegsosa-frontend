import React from "react";
import Head from "next/head";
import parseHtml from "html-react-parser";
import "src/global.css";

const headerTags = ``;
const productionHeaderTags = process.env.NODE_ENV === "development" ? "" : ``;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        ${parseHtml(headerTags)}${parseHtml(productionHeaderTags)}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
