import { View as RNView, Text as RNText, type ViewProps, type TextProps } from "react-native";
import { useTheme } from "../lib/theme";

export function ScreenContainer({ style, ...rest }: ViewProps) {
  const { colors } = useTheme();
  return <RNView style={[{ flex: 1, backgroundColor: colors.background }, style]} {...rest} />;
}

export function Card({ style, ...rest }: ViewProps) {
  const { colors } = useTheme();
  return (
    <RNView
      style={[
        {
          backgroundColor: colors.surface,
          borderRadius: 16,
          padding: 16,
          shadowColor: "#000",
          shadowOpacity: 0.08,
          shadowRadius: 16,
          elevation: 2,
          borderWidth: 1,
          borderColor: colors.border,
        },
        style,
      ]}
      {...rest}
    />
  );
}

export function Text({ style, ...rest }: TextProps) {
  const { colors } = useTheme();
  return <RNText style={[{ color: colors.text, fontSize: 16 }, style]} {...rest} />;
}

export function Label({ style, ...rest }: TextProps) {
  const { colors } = useTheme();
  return <RNText style={[{ color: colors.subtext, fontSize: 13 }, style]} {...rest} />;
}
