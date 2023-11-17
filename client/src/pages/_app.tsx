import '../styles/index.css';
import type { AppProps } from 'next/app';
import PageContainer from 'components/layout/page-container';
import Navbar from 'components/layout/navbar';
import Sidebar from 'components/layout/sidebar';
import { ProvideBaseStores } from 'providers/BaseStoresProvider';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getPageLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsData = {};

type AppPropsWithLayout = AppProps<AppPropsData> & {
  Component: NextPageWithLayout<AppPropsData>;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getPageLayout = Component.getPageLayout ?? ((page) => page);

  return (
    <ProvideBaseStores>
      <PageContainer>
        <Navbar />
        <Component {...pageProps} />
      </PageContainer>

      <Sidebar />
    </ProvideBaseStores>
  );
}
