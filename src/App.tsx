import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import Layout from "./layout/Layout";

import theme from "./theme";
import "@fontsource/inter";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout></Layout>
    </ChakraProvider>
  );
}

export default App;
