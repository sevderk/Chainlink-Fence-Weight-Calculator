import { View, Pressable } from "react-native";
import { ScreenContainer, Card, Text, Label } from "../components/Themed";
import Button from "../components/Button";
import { useTheme } from "../lib/theme";
import { clearToken } from "../lib/storage";
import { useRouter } from "expo-router";

export default function Settings() {
  const { mode, setMode, resolved, colors } = useTheme();
  const router = useRouter();

  return (
    <ScreenContainer>
      <View style={{ padding: 16, gap: 12 }}>
        {/* Appearance */}
        <Card>
          <Text style={{ fontSize: 18, fontWeight: "700", marginBottom: 8 }}>
            Appearance
          </Text>
          <Label>Theme preference</Label>
          <View style={{ flexDirection: "row", gap: 8, marginTop: 12 }}>
            <Button title="Light" onPress={() => setMode("light")} />
            <Button title="Dark" onPress={() => setMode("dark")} />
          </View>
          <Label style={{ marginTop: 8 }}>
            Selected: {mode} — Active: {resolved}
          </Label>
        </Card>

        {/* Account */}
        <Card>
          <Text style={{ fontSize: 18, fontWeight: "700", marginBottom: 8 }}>
            Account
          </Text>

          <Pressable
            onPress={async () => {
              await clearToken();
              router.replace("/(tabs)/m2");
            }}
            style={({ pressed }) => ({
              borderWidth: 1,
              borderColor: colors.border,
              backgroundColor: "transparent",
              borderRadius: 12,
              paddingVertical: 12,
              paddingHorizontal: 16,
              alignItems: "center",
              opacity: pressed ? 0.9 : 1,
            })}
          >
            <Text style={{ color: colors.text, fontWeight: "600" }}>
              Log out
            </Text>
          </Pressable>
        </Card>
      </View>
    </ScreenContainer>
  );
}
