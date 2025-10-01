import { Pressable, ActivityIndicator, ViewStyle } from "react-native";
import { Text } from "./Themed";
import { useTheme } from "../lib/theme";

export default function Button({
  title,
  onPress,
  loading,
  style,
}: {
  title: string;
  onPress?: () => void;
  loading?: boolean;
  style?: ViewStyle;
}) {
  const { colors } = useTheme();
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: colors.primary,
          borderRadius: 12,
          paddingVertical: 12,
          paddingHorizontal: 16,
          opacity: pressed ? 0.9 : 1,
          alignItems: "center",
        },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={colors.primaryText} />
      ) : (
        <Text style={{ color: colors.primaryText, fontWeight: "600" }}>{title}</Text>
      )}
    </Pressable>
  );
}
