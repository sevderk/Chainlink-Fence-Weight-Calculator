import { useState } from "react";
import { TextInput, View, Pressable } from "react-native";
import { Text } from "./Themed";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../lib/theme";

type FieldProps = {
  label?: string;
  value?: string;
  onChangeText?: (t: string) => void;
  placeholder?: string;
  keyboardType?: any;
  secureTextEntry?: boolean;
  showLabel?: boolean;
};

export default function Field({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType,
  secureTextEntry,
  showLabel = true,
}: FieldProps) {
  const [hidden, setHidden] = useState(secureTextEntry ?? false);
  const { colors } = useTheme();

  return (
    <View style={{ gap: 6 }}>
      {showLabel && !!label && (
        <Text style={{ fontSize: 14, fontWeight: "700", color: colors.text }}>
          {label}
        </Text>
      )}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 1,
          borderColor: colors.border,
          borderRadius: 12,
          paddingHorizontal: 12,
          backgroundColor: colors.surface,
          height: 48,
        }}
      >
        <TextInput
          style={{ flex: 1, fontSize: 16, color: colors.text }}
          placeholderTextColor={colors.subtext}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          keyboardType={keyboardType}
          secureTextEntry={hidden}
        />
        {secureTextEntry && (
          <Pressable onPress={() => setHidden(h => !h)} style={{ paddingLeft: 8 }}>
            <Ionicons
              name={hidden ? "eye-off-outline" : "eye-outline"}
              size={20}
              color={colors.subtext}
            />
          </Pressable>
        )}
      </View>
    </View>
  );
}
