import Loading from "@/components/Loading";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "@/store";
import { logo_header } from "@/files/file";
import Head from "next/head";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>Lofi - Chìll</title>
        <link rel="icon" href={logo_header} />
      </Head>
      <Suspense fallback={<Loading />}>
        <Component {...pageProps} />
        <Toaster />
      </Suspense>
    </Provider>
  );
}
