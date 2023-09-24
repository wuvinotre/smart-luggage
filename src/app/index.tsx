import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { CircleButton } from "../components/circle-button";
import { IconButton } from "../components/icon-button";
import { BaggageBig } from "../components/baggage/big";
import { COLORS } from "../assets";

SplashScreen.preventAutoHideAsync();

type Props = {
  baggage: {
    name: string;
  };
};

export default function Page({ baggage }: Props) {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator animating size={"large"} />
      </View>
    );
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar style="auto" />
      <View style={styles.containerIconMenu}>
        <IconButton
          name="grid-outline"
          size={30}
          color={COLORS.black}
          onPress={() => undefined}
        />
      </View>
      <View style={styles.containerHeader}>
        <View>
          <Text style={{ fontSize: 18, fontFamily: "Roboto-Regular" }}>
            {baggage?.name ?? "Header"}
          </Text>
          <Text style={styles.headerName}>
            {baggage?.name ?? "Name Header"}
          </Text>
        </View>
        <CircleButton
          onPress={() => undefined}
          name="ellipsis-horizontal-outline"
          size={30}
          color={COLORS.black}
        />
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <BaggageBig />
      </View>
      <View style={styles.containerButtons}>
        <View style={styles.containerButton}>
          <CircleButton
            size={25}
            name="location-outline"
            color={COLORS.black}
            onPress={() => undefined}
            containerStyle={{
              width: 70,
              height: 70,
              borderRadius: 35,
            }}
          />
          <Text>Find</Text>
        </View>
        <View style={styles.containerButton}>
          <CircleButton
            size={25}
            name="lock-closed-outline"
            color={COLORS.white}
            onPress={() => undefined}
            containerStyle={{
              width: 70,
              height: 70,
              borderRadius: 35,
              backgroundColor: COLORS.lightBlue,
            }}
          />
          <Text>Unlock</Text>
        </View>
        <View style={styles.containerButton}>
          <CircleButton
            size={25}
            name="stats-chart-outline"
            color={COLORS.black}
            onPress={() => undefined}
            containerStyle={{
              width: 70,
              height: 70,
              borderRadius: 35,
            }}
          />
          <Text>Weight</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loading: { flex: 1, justifyContent: "center", alignItems: "center" },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
  containerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerName: {
    fontSize: 20,
    fontFamily: "Roboto-Bold",
  },
  containerIconMenu: {
    marginBottom: 20,
  },
  containerCircle: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  containerButtons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  containerButton: {
    alignItems: "center",
    gap: 5,
  },
});
