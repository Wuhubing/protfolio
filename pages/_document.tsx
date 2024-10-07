import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";
import React from 'react';
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body className="bg-white leading-relaxed text-gray-900 antialiased selection:bg-orange-200 selection:text-orange-900 font-inter">
        <Main />
        <NextScript />
      </body>
      <Script strategy="beforeInteractive" src="./moveCircle.js" />
    </Html>
  );
}