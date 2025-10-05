import { View, Pressable } from "react-native";
import { ScreenContainer, Card, Text, Label } from "../components/Themed";
import Button from "../components/Button";
import { useTheme } from "../lib/theme";
import { clearToken } from "../lib/storage";
import { useRouter } from "expo-router";

export default function Settings() {
  const { mode, setMode, colors } = useTheme();
  const router = useRouter();

  return (
    <ScreenContainer>
      <View style={{ padding: 16, gap: 12 }}>
        <Card>
          <Text style={{ fontSize: 18, fontWeight: "700", marginBottom: 8 }}>
            Görünüm
          </Text>
          <Label>Tema tercihi</Label>

          <View style={{ flexDirection: "row", gap: 8, marginTop: 12 }}>
            <Button
              title="Açık"
              variant="outline"
              selected={mode === "light"}
              onPress={() => setMode("light")}
            />
            <Button
              title="Koyu"
              variant="outline"
              selected={mode === "dark"}
              onPress={() => setMode("dark")}
            />
          </View>
        </Card>

        <Card>
          <Text style={{ fontSize: 18, fontWeight: "700", marginBottom: 8 }}>
            Hesap
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
              Çıkış Yap
            </Text>
          </Pressable>
        </Card>
      </View>
    </ScreenContainer>
  );
}
