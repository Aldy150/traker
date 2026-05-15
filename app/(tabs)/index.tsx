import { Text, View, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import Cards from '@/composants/cards';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f8fafc' }}>
      <StatusBar barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 24 }}>

        {/* Header Section */}
        <View style={{ marginBottom: 32 }}>
          <Text style={{ fontSize: 13, color: '#64748b', fontWeight: '600', textTransform: 'uppercase', letterSpacing: 1 }}>
            Tableau de bord
          </Text>
          <Text style={{ fontSize: 28, fontWeight: '800', color: '#0f172a', marginTop: 4 }}>
            Bonjour, Aldy 👋
          </Text>
        </View>

        {/* Hero Card (Main Stat) */}
        <Cards
          title='Revenus Total'
          value="24 500,00 €"
          iconName="wallet-outline"
          height={160}
          backgroundColor='#262973'
          textColor='#fff'
          titleSize={16}
          valueSize={34}

        />

        {/* Grid Section */}
        <Text style={{ fontSize: 18, fontWeight: '700', color: '#1e293b', marginBottom: 16, marginTop: 10 }}>
          Statistiques clés
        </Text>

        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <Cards
            title='En attente'
            value={5}
            width="48%"
            height={120}
            iconName="time-outline"
            backgroundColor="#fff"
            textColor="#262973"
          />

          <Cards
            title='Livraisons'
            value={156}
            width="48%"
            height={120}
            iconName="rocket-outline"
            backgroundColor="#fff"
            textColor="#262973"
          />

          <Cards
            title='Véhicules'
            value={12}
            width="48%"
            height={120}
            iconName="car-sport-outline"
            backgroundColor="#fff"
            textColor="#262973"
          />

          <Cards
            title='Alertes'
            value={3}
            width="48%"
            height={120}
            iconName="alert-circle-outline"
            backgroundColor="#fee2e2" // Fond rouge très léger
            textColor="#ef4444" // Texte rouge alerte
          />
        </View>
        <View
          style={{ height: 100, marginBottom: 50, display:'flex', justifyContent:'space-between' }}
        >
          <Text style={{ fontSize: 13, color: '#64748b', fontWeight: '600', textTransform: 'uppercase', letterSpacing: 1 }}>
            Suivi en temps réel
          </Text>
            <Text style={{ fontSize: 28, fontWeight: '800', color: '#0f172a' }}>
            Voir toutes les livraisons
          </Text>
        
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}