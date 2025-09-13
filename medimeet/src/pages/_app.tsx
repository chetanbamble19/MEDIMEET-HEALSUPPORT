import "../app/globals.css";

import type { AppProps } from "next/app";
import Chatbot from "../app/(main)/_components/Chatbot";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Chatbot />
    </>
  );
}
