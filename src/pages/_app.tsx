import '../styles/index.css';
import type { AppProps } from 'next/app';
import PageContainer from '@/components/layout/page-container';
import Navbar from '@/components/layout/navbar';
import { ProvideBaseStores } from '@/providers/BaseStoresProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProvideBaseStores>
      <PageContainer>
        <Navbar />
        <Component {...pageProps} />
      </PageContainer>
    </ProvideBaseStores>
  );
}
