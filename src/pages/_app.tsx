import { Inter } from "@next/font/google";
import type { AppProps } from "next/app";
import { Provider } from "urql";
import { Layout } from "../components/Layout";
import { client, ssrCache } from "../lib/urql";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState);
  }

  return (
    <main className={`${inter.variable} font-sans`}>
      <Layout>
        <Provider value={client}>
          <Component {...pageProps} />
        </Provider>
      </Layout>
    </main>
  );
}
