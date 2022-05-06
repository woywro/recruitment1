import { AppProps } from 'next/app';
import { Layout } from '../components/Layout';
import { GlobalStyles } from '../theme/globalStyles';
import { theme } from '../theme/theme';
import { client } from '../../apollo-client';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}
