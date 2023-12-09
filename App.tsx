import React from "react";
import { initializeServices } from "./initializeServices";
import { ServicesContext } from "./src/core/serviceContext";
import RootStack from "./src/navigation/rootStack";

export default function App() {
  const service = initializeServices();

  return (
    <ServicesContext.Provider value={service}>
      <RootStack />
    </ServicesContext.Provider>
  );
}
