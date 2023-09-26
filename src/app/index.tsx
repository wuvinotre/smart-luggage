import { useEffect } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { SplashScreen } from "expo-router";
import { useFonts } from "expo-font";

import Home from "./home";
import Login from "./login";

SplashScreen.preventAutoHideAsync();

export default function Page() {
  const isAuthenticated = false;

  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      setTimeout(() => {
        SplashScreen.hideAsync();
      });
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator animating size={"large"} />
      </View>
    );
  }

  return isAuthenticated ? <Home /> : <Login />;
}

const styles = StyleSheet.create({
  loading: { flex: 1, justifyContent: "center", alignItems: "center" },
});
