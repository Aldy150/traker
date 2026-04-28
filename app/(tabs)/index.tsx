import { Text, View, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import "../global.css";
import Cards from '@/composants/cards';

export default function HomeScreen() {
  return (
   <ScrollView className='flex-1 bg-gray-50'>
      <View className='p-5'>
        <Text className="text-2xl font-bold text-slate-900">
          Bonjour, Aldy !
        </Text>
        
        <Text className="text-gray-500 text-sm mt-1">
          Voici votre résumé d'activité pour aujourd'hui.
        </Text>

        {/* Espace avant les cartes */}
        <View className="mt-6">
          <Cards title='Revenus' value={24} width={400} height={180} backgroundColor='#262973'/>
        </View>
      </View>
    </ScrollView>
  );
}

