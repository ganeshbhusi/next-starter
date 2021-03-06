import Layout from "../components/Layout";
import "../styles/globals.css";
import Header from "./header/header";

function MyApp({Component, pageProps}) {
  return (
    <Layout>
      <Header />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
