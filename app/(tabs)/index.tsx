import { Text, View, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-gray-50">
      <Text className="text-green-500 text-2xl font-bold">
        Bienvenue sur Traker! 
      </Text>
      
      <Link href="/about" asChild>
        <TouchableOpacity className="bg-purple-500 px-6 py-3 rounded-full mt-6">
          <Text className="text-white font-semibold">
           Allez vers à propos 
          </Text>
        </TouchableOpacity>
      </Link>
      
      <Text className="text-gray-400 text-sm mt-8">
        Utilisez la barre en bas pour naviguer
      </Text>
    </View>
  );
}
