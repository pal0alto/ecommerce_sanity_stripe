import '../styles/globals.css';
import React from 'react';
import { StateContext } from '../context/StateContext';
import { Toast } from 'react-hot-toast';
import { Layout } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>

    <Layout>
      <Component {...pageProps} />

    </Layout>
    </StateContext>
  )
}

export default MyApp
