import "@/styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store, { persistor } from "@/store";
import { PersistGate } from "redux-persist/integration/react";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
// import { apiSlice } from "@/store/apiSlice";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        {/* <ApiProvider api={apiSlice}> */}
          <PersistGate persistor={persistor}>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </PersistGate>
        {/* </ApiProvider> */}
      </Provider>
    </>
  );
}
