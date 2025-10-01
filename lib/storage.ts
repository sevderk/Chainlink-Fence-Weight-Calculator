import AsyncStorage from "@react-native-async-storage/async-storage";

const AUTH_KEY = "auth-token";

export async function saveToken(token: string) {
  await AsyncStorage.setItem(AUTH_KEY, token);
}

export async function getToken() {
  return AsyncStorage.getItem(AUTH_KEY);
}

export async function clearToken() {
  await AsyncStorage.removeItem(AUTH_KEY);
}
