import "@/styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "@/store";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "@/store/apiSlice";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <ApiProvider api={apiSlice}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </ApiProvider>
      </Provider>
    </>
  );
}
