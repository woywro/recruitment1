import { AppProps } from 'next/app';
import { Layout } from '../components/Layout';
import { GlobalStyles } from '../theme/globalStyles';
import { theme } from '../theme/theme';
import { ThemeProvider } from 'styled-components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
