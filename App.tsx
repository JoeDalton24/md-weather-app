import React from "react";
import { initializeServices } from "./initializeServices";
import { ServicesContext } from "./src/core/serviceContext";
import RootStack from "./src/navigation/rootStack";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/ui/styles/theme";

export default function App() {
  const service = initializeServices();

  return (
    <ServicesContext.Provider value={service}>
      <ThemeProvider theme={theme}>
        <RootStack />
      </ThemeProvider>
    </ServicesContext.Provider>
  );
}
