import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { useServices } from "../../core/serviceContext";
import { Config } from "../../core/config/config";

export default function HomeScreen() {
  const { weatherService } = useServices();
  console.log("Config", Config);
  // console.log(
  //   "process.env.EXPO_PUBLIC_API_BASE_URL",
  //   process.env.EXPO_PUBLIC_API_BASE_URL
  // );
  return (
    <View>
      <Text style={styles.title}>
        The title and onPress handler are required. It is recommended to set
        accessibilityLabel to help make your app usable by everyone.
      </Text>
      <Button
        title="Press me"
        onPress={async () => {
          const data = await weatherService.getWeatherByLatAndLon(
            14.499454,
            -14.445561
          );
          console.log("data", data);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
});
