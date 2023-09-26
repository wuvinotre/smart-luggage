import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { CircleButton } from "../components/circle-button";
import { IconButton } from "../components/icon-button";
import { BaggageBig } from "../components/baggage/big";
import { COLORS } from "../assets";

const Home = () => {
  return (
    <View style={styles.container}>
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
            {"Header"}
          </Text>
          <Text style={styles.headerName}>{"Name Header"}</Text>
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
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: "15%",
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
