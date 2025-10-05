import { Pressable, ActivityIndicator, ViewStyle } from "react-native";
import { Text } from "./Themed";
import { useTheme } from "../lib/theme";

type Variant = "primary" | "outline";

export default function Button({
  title,
  onPress,
  loading,
  style,
  variant = "primary",
  selected = false,
}: {
  title: string;
  onPress?: () => void;
  loading?: boolean;
  style?: ViewStyle;
  variant?: Variant;
  selected?: boolean;
}) {
  const { colors } = useTheme();

  const isOutline = variant === "outline";
  const bg = isOutline
    ? (selected ? colors.primary : "transparent")
    : colors.primary;
  const borderColor = isOutline ? (selected ? colors.primary : colors.border) : "transparent";
  const txt = isOutline ? (selected ? colors.primaryText : colors.text) : colors.primaryText;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: bg,
          borderRadius: 12,
          paddingVertical: 12,
          paddingHorizontal: 16,
          opacity: pressed ? 0.9 : 1,
          alignItems: "center",
          borderWidth: isOutline ? 1 : 0,
          borderColor,
        },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={txt} />
      ) : (
        <Text style={{ color: txt, fontWeight: "600" }}>{title}</Text>
      )}
    </Pressable>
  );
}
