import { Text, View, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import "../global.css";

export default function HomeScreen() {
  return (
    <View className='p-3'>
      <Text className=" text-2xl font-bold">
        Bonjour, Aldy !
      </Text>
      
      
      <Text className="text-gray-400 text-sm m-1">
        Voici votre résumé d'activité pour aujourd'hui.
      </Text>
     
    </View>
  );
}

