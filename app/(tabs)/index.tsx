import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
//import { Ionicons } from '@expo/vector-icons';
import Navigation from './_layout';


export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="px-6 pt-12 pb-4 flex-1 items-center justify-center h-screen">
        <Text className="text-3xl font-bold text-red-500">Bienvenue sur Traker</Text>
        <Text className="text-gray-500 mt-1 text-xl">Suivez les activités de votre flotte en temps réel</Text>
      </View>
      <Navigation />
    </ScrollView>
  );
}