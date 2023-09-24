import Icon from "@expo/vector-icons/Ionicons";
import { useMemo } from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { RectButton } from "react-native-gesture-handler";

type Props = {
  onPress: () => void;
  name: keyof typeof Icon.glyphMap;
  size: number;
  color: string;
  containerStyle?: ViewStyle;
};

export const CircleButton = ({
  onPress,
  name,
  size,
  color,
  containerStyle,
}: Props) => {
  const containerButton = useMemo(() => {
    return {
      ...styles.containerButton,
      ...containerStyle,
    };
  }, []);

  return (
    <RectButton style={containerButton} onPress={onPress}>
      <Icon name={name} size={size} color={color} />
    </RectButton>
  );
};

const styles = StyleSheet.create({
  containerButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    backgroundColor: "#eee",
    borderRadius: 20,
  },
});
