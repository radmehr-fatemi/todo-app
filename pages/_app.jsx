import {SessionProvider} from "next-auth/react";

//Component
import Layout from '@/components/template/layout';

//Style
import '@/styles/globals.css';


export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session} >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}
