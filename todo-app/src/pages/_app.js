import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import { ChakraProvider } from "@chakra-ui/react";



export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}
