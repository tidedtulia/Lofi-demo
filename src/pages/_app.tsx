import Loading from "@/components/Loading";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "@/store";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Suspense fallback={<Loading />}>
        <Component {...pageProps} />
        <Toaster />
      </Suspense>
    </Provider>
  );
}
