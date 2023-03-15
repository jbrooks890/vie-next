import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "../components/shared/MainLayout";
import Footer from "../components/shared/Footer";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Vie: The Game</title>
        <meta name="description" content="The official website of Vie&tm;" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
      <Footer />
    </>
  );
}
