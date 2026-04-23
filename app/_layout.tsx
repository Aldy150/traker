import { Drawer } from 'expo-router/drawer'; // On utilise le Drawer d'expo-router
import '../global.css';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  return (
    // Obligatoire pour le Drawer
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="(tabs)"
          options={{
            drawerLabel: 'Accueil',
            title: 'Mon App',
            headerShown: false, // On le cache ici car les Tabs ont leur propre header
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}