import { Tabs, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { useTheme } from "../../lib/theme";

type TabIconProps = { color: string; size: number; focused: boolean };

export default function TabsLayout() {
  const { colors } = useTheme();
  const router = useRouter();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.tabActive,
        tabBarInactiveTintColor: colors.tabInactive,
        tabBarStyle: { backgroundColor: colors.surface, borderTopColor: colors.border },
        headerStyle: { backgroundColor: colors.surface },
        headerTintColor: colors.text,
        headerRight: () => (
          <>
            <Pressable onPress={() => router.push("/(auth)/login")} style={{ paddingHorizontal: 8 }}>
              <Ionicons name="log-in-outline" size={22} color={colors.text} />
            </Pressable>
            <Pressable onPress={() => router.push("/(auth)/signup")} style={{ paddingHorizontal: 8 }}>
              <Ionicons name="person-add-outline" size={22} color={colors.text} />
            </Pressable>
            <Pressable onPress={() => router.push("/settings")} style={{ paddingHorizontal: 8 }}>
              <Ionicons name="settings-outline" size={22} color={colors.text} />
            </Pressable>
          </>
        ),
      }}
    >
      <Tabs.Screen
        name="m2"
        options={{
          title: "m² Ağırlık",
          tabBarIcon: ({ color, size }: TabIconProps) => (
            <Ionicons name="grid-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="roll"
        options={{
          title: "Rulo Ağırlığı",
          tabBarIcon: ({ color, size }: TabIconProps) => (
            <Ionicons name="reorder-four-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="project"
        options={{
          title: "Proje Ağırlığı",
          tabBarIcon: ({ color, size }: TabIconProps) => (
            <Ionicons name="briefcase-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="info"
        options={{
          title: "Bilgi",
          tabBarIcon: ({ color, size }: TabIconProps) => (
            <Ionicons name="information-circle-outline" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
