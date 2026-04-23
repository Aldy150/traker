import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from 'expo-router';
import { DrawerNavigationProp } from '@react-navigation/drawer';

export default function TabLayout() {
  // On force le type pour que TypeScript reconnaisse .toggleDrawer()
  const navigation = useNavigation<DrawerNavigationProp<any>>();

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: true,
          headerTitle: "",
          headerLeft: () => (
            <Ionicons
              name="menu"
              size={28}
              color="black"
              // Désormais, TypeScript ne souligne plus toggleDrawer en rouge
              onPress={() => navigation.toggleDrawer()}
              style={{ marginLeft: 15 }}
            />
          ),
          headerRight:()=> (
            <Ionicons name="notifications" 
            size={24} color="black"
            style={{ marginRight: 15 ,}} />
          ),

          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="stats"
        options={{
          title: 'Statistiques',
          headerShown: true,
          headerStyle: { backgroundColor: '#1D4ED8' },
          headerTintColor: '#fff',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bar-chart" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}