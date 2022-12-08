import { useState } from "react";

import { NextComponentType } from "next";
import type { AppContext, AppInitialProps, AppProps } from "next/app";

import Head from "next/head";

import { GlobalStyles } from "styled";

import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { NextSeo } from "next-seo";
import { RecoilRoot } from "recoil";

import AppLayout from "layouts/AppLayout";

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 2,
          },
        },
      })
  );

  return (
    <>
      {GlobalStyles}
      <RecoilRoot>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
          />
        </Head>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <NextSeo title="My Snowball" />
            <AppLayout>
              <Component {...pageProps} />
            </AppLayout>
            <ReactQueryDevtools initialIsOpen={false} />
          </Hydrate>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
};

export default MyApp;
