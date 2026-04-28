import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TouchableOpacity, Alert, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import '../global.css';


export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer 
        screenOptions={{ 
         // headerTintColor: '#002366',
         // headerTitleAlign: 'center', // Optionnel : centre le titre si tu en mets un
        }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            drawerLabel: 'Accueil',
            headerTitle: '',
            
            // TOUT doit être dans cet objet options
            headerRight: () => (
              <TouchableOpacity 
               // onPress={() => Alert.alert("Profil", "Accès aux paramètres")}
                style={{ marginRight: 15 }}
              >
                <Ionicons name="notifications-outline" size={28} color="#002366" />
              </TouchableOpacity>
            ),
          }}
        />
        
        {/* Exemple d'un autre écran dans le menu latéral */}
        <Drawer.Screen
          name="settings" 
          options={{
            drawerLabel: 'Paramètres',
            title: 'Configuration',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}