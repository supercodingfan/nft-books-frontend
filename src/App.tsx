import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";

import Layout from "./layout/Layout";
import BookList from "./containers/BookList";

import theme from "./theme";
import "@fontsource/inter";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <BookList />
      </Layout>
      <ToastContainer position="top-right" />
    </ChakraProvider>
  );
}

export default App;
