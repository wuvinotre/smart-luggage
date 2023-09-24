import Icon from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";

type Props = {
  onPress: () => void;
  name: keyof typeof Icon.glyphMap;
  size: number;
  color: string;
};

export const IconButton = ({ onPress, name, size, color }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};
