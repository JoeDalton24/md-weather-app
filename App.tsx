import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { initializeServices } from "./initializeServices";
import { ServicesContext } from "./src/core/serviceContext";
import RootStack from "./src/navigation/rootStack";

export default function App() {
  const service = initializeServices();

  return (
    <ServicesContext.Provider value={service}>
      <RootStack />
      {/* <View style={styles.container}>
        <T>Open up App.tsx to start working on your app!</Buto>
        <StatusBar style="auto" />
      </View> */}
    </ServicesContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
