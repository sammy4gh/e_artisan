import { useState, useEffect } from "react";
import "../../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/layouts/header/header";
import Footer from "../components/layouts/Footer/footer";
import { store } from '../components/redux/store';
import { Provider } from 'react-redux';
import {useRouter} from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(function () {
      setLoading(false);
    }, 250);

    return () => {
      setLoading(true);
    };
  }, [pageProps]);


  const router = useRouter()
const {pathname} = router
  return (
    <>
      <Provider store={store}>

        <section className="bg-gray-50">
         {pathname === '/login' || <Header />}

          <section
            className={

              `${loading === true ? "loading" : ""}`
            }
          >
            <Component {...pageProps} />
          </section>

         {/* <Footer /> */}
        </section>
      </Provider>
    </>
  );
}
export default MyApp;
