import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

import "../styles/global.scss";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ToastContainer 
        position='top-center'
        theme='dark'
      />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp
