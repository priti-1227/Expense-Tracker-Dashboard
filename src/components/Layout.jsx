import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import theme from "../theme";

const Layout = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default Layout;
