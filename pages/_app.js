import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import Page from '../components/Page';
import 'normalize.css';

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Page>
          <Component {...pageProps} />
        </Page>
      </ThemeProvider>
    );
  }
}
