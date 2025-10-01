import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type ThemeMode = "light" | "dark";

const PALETTE = {
  teal: "#3C6E71",
  deepTeal: "#284B63",
  softTeal: "#6FA3A9",

  charcoal: "#353535",
  slate: "#1F2D36",
  gray: "#D9D9D9",
  white: "#FFFFFF",
  offWhite: "#F5F7F7",

  textStrong: "#111111",
  subtextLight: "#4B5A66",
  borderLight: "#E6E6E6",

  surfaceDark: "#1A242C",
  textOnDark: "#F3F5F7",
  subtextDark: "#C6D0D8",
  borderDark: "#2E3942",

  tabInactiveLight: "#7C8A97",
  tabInactiveDark: "#7D8B97",
};

export const lightTheme = {
  background: PALETTE.offWhite,
  surface: PALETTE.white,
  text: PALETTE.textStrong,
  subtext: PALETTE.subtextLight,
  primary: PALETTE.teal,
  primaryText: PALETTE.white,
  border: PALETTE.borderLight,
  tabActive: PALETTE.deepTeal,
  tabInactive: PALETTE.tabInactiveLight,
};

export const darkTheme = {
  background: PALETTE.slate,
  surface: PALETTE.surfaceDark,
  text: PALETTE.textOnDark,
  subtext: PALETTE.subtextDark,
  primary: PALETTE.teal,
  primaryText: PALETTE.white,
  border: PALETTE.borderDark,
  tabActive: PALETTE.softTeal,
  tabInactive: PALETTE.tabInactiveDark,
};

type ThemeColors = typeof lightTheme;

type ThemeValue = {
  mode: ThemeMode;
  setMode: (m: ThemeMode) => void;
  resolved: "light" | "dark";
  colors: ThemeColors;
};

const ThemeCtx = createContext<ThemeValue | null>(null);
const STORAGE_KEY = "theme-mode";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>("light");

  useEffect(() => {
    (async () => {
      const saved = await AsyncStorage.getItem(STORAGE_KEY);
      if (saved === "light" || saved === "dark") setMode(saved);
    })();
  }, []);

  const resolved: "light" | "dark" = mode;
  const colors = useMemo<ThemeColors>(() => (resolved === "dark" ? darkTheme : lightTheme), [resolved]);

  const value = useMemo<ThemeValue>(
    () => ({
      mode,
      setMode: (m) => {
        setMode(m);
        AsyncStorage.setItem(STORAGE_KEY, m);
      },
      resolved,
      colors,
    }),
    [mode, resolved, colors]
  );

  return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeCtx);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
