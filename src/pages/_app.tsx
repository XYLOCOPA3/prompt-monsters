import type { AppProps } from "next/app";
import Head from "next/head";
import { UserInit } from "@/features/auth";
import "@/styles/globals.css";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <RecoilRoot>
        <UserInit>
          <Component {...pageProps} />
        </UserInit>
      </RecoilRoot>
    </>
  );
}
