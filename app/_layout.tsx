import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider, useTheme } from "../lib/theme";

function WithTheme() {
  const { colors, resolved } = useTheme();
  const isDark = resolved === "dark";

  return (
    <>
      <StatusBar style={isDark ? "light" : "dark"} />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: colors.surface },
          headerTintColor: colors.text,
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="settings" options={{ title: "Ayarlar" }} />
        <Stack.Screen name="(auth)/login" options={{ title: "Giriş Yap" }} />
        <Stack.Screen name="(auth)/signup" options={{ title: "Kayıt Ol" }} />
      </Stack>
    </>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <WithTheme />
    </ThemeProvider>
  );
}
