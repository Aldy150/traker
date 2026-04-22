import { View, Text, ScrollView, Dimensions } from 'react-native';
import { LineChart, BarChart } from 'react-native-chart-kit';

export default function StatsScreen() {
  const data = {
    labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
    datasets: [{ data: [6500, 8200, 7800, 9500, 11200, 8900, 10200] }],
  };

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="px-6 pt-12 pb-4">
        <Text className="text-3xl font-bold text-gray-800">Statistiques</Text>
        <Text className="text-gray-500 mt-1">Vos performances sur 7 jours</Text>
      </View>

      <View className="bg-white rounded-2xl mx-6 p-5 shadow-sm">
        <Text className="text-gray-700 font-semibold mb-4">Évolution des pas</Text>
        <LineChart
          data={data}
          width={Dimensions.get('window').width - 60}
          height={220}
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(108, 99, 255, ${opacity})`,
            style: { borderRadius: 16 },
          }}
          bezier
          style={{ marginLeft: -25 }}
        />
      </View>

      {/* Objectif du mois */}
      <View className="mx-6 mt-6 mb-8">
        <View className="bg-purple-500 rounded-2xl p-6">
          <Text className="text-white text-lg font-bold mb-2">Objectif du mois</Text>
          <Text className="text-white text-4xl font-bold">245k / 300k</Text>
          <Text className="text-white opacity-80 mt-2">pas réalisés</Text>
          <View className="mt-4 bg-white/30 rounded-full h-3">
            <View className="bg-white rounded-full h-3 w-[82%]" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}