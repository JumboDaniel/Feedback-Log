//file imports
import "../styles/globals.css";
import { ProvideAuth } from "@/lib/auth";

///Node imports
import { ChakraProvider, CSSReset, GlobalStyle } from "@chakra-ui/react";
import { jsx } from "@emotion/react";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ProvideAuth>
        <CSSReset />
        <Component {...pageProps} />
      </ProvideAuth>
    </ChakraProvider>
  );
}

export default MyApp;
