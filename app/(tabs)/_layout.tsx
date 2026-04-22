import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Platform } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        // 1. Force la position en bas (essentiel pour Android si ça s'affiche en haut)
        tabBarPosition: 'bottom', 
        
        tabBarActiveTintColor: '#ffd33d',
        tabBarInactiveTintColor: '#8e8e93',
        
        // 2. Style de la barre
        tabBarStyle: {
          backgroundColor: '#25292e',
          borderTopWidth: 0,
          height: Platform.OS === 'ios' ? 85 : 65, // Plus grand sur iOS pour la zone sécurisée
          paddingBottom: Platform.OS === 'ios' ? 25 : 10,
          paddingTop: 10,
        },
        
        // 3. Masquer le titre du header si tu veux un look plus épuré
        headerShown: true, 
        headerStyle: { backgroundColor: '#25292e' },
        headerTintColor: '#fff',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Accueil',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Stats"
        options={{
          title: 'Stats',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'calendar' : 'calendar'} size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}