import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

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
    </ChakraProvider>
  );
}

export default App;
