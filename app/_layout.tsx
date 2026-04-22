import { Stack } from 'expo-router';
import '../global.css';
import { View, Text } from 'react-native';

export default function RootLayout() {
  return (
    <Stack>
      {/* On masque le header pour tout le groupe (tabs) */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}