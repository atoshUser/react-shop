import React from "react";
import "./App.css";
import { Header, Footer, Main } from "./components/index";
import { ToastContainer } from "react-toastify";
import { ContextProvider } from "./components/context/context";
const App = () => {
  return (
    <>
      <ToastContainer />
      <Header />

      <ContextProvider>
        <Main />
      </ContextProvider>

      <Footer />
    </>
  );
};

export default App;
