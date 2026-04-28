import React from 'react';
import {
  Alert,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import { CurvedBottomBarExpo } from 'react-native-curved-bottom-bar';
import Ionicons from '@expo/vector-icons/Ionicons';
import Index from './index';

const { width } = Dimensions.get('window');

const Screen1 = () => <View style={styles.screen1} />;
const Screen2 = () => <View style={styles.screen2} />;
const Screen3 = () => <View style={styles.screen2} />;
const Screen4 = () => <View style={styles.screen2} />;

export default function App() {

  const _renderIcon = (routeName: string, selectedTab: string) => {
    let iconName: any;

    // On définit l'icône selon le nom de la route
    switch (routeName) {
      case 'title1':
        iconName = 'home-outline';
        break;
      case 'title2':
        iconName = 'search-outline'; // Change ici
        break;
      case 'title3':
        iconName = 'chatbubble-outline'; // Change ici
        break;
      case 'title4':
        iconName = 'person-outline'; // Change ici
        break;
      default:
        iconName = 'apps-outline';
    }

    return (
      <Ionicons
        name={iconName}
        size={25}
        color={routeName === selectedTab ? 'blue' : '#9ca3af'}
      />
    );
  };
  return (
    <CurvedBottomBarExpo.Navigator
      // --- PROPS D'IDENTIFICATION & DIMENSIONS ---
      id="main-tab-bar"
      width={width}
      height={55}
      type="DOWN"
      bgColor="white"
      initialRouteName="title1"

      // --- PROPS RÉCLAMÉES PAR TON ERREUR TS ---
      circlePosition="CENTER"
      backBehavior="history"
      screenOptions={{ headerShown: false }}
      defaultScreenOptions={{}}
      screenListeners={{}}

      // --- DESIGN & BORDURES ---
      borderTopLeftRight={true}
      borderColor="#DDDDDD"
      borderWidth={0}
      style={styles.bottomBar}
      shadowStyle={styles.shadow}
      circleWidth={50}

      // --- RENDU DU BOUTON CENTRAL (CERCLE) ---
      renderCircle={() => (
        <Animated.View style={styles.btnCircleUp}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert('Click Action')}
          >
            <Ionicons name={'add'} color="white" size={25} />
          </TouchableOpacity>
        </Animated.View>
      )}

      // --- RENDU DE LA BARRE D'ONGLETS ---
      tabBar={({ routeName, selectedTab, navigate }: { routeName: string, selectedTab: string, navigate: (name: string) => void }) => (
        <TouchableOpacity
          onPress={() => navigate(routeName)}
          style={styles.tabbarItem}
        >
          {_renderIcon(routeName, selectedTab)}
        </TouchableOpacity>
      )}
    >
      <CurvedBottomBarExpo.Screen
        name="title1"
        position="LEFT"
        component={() => <Index />}
      />
      <CurvedBottomBarExpo.Screen
        name="title2"
        position="LEFT"
        component={() => <Screen2 />}
      />
       <CurvedBottomBarExpo.Screen
        name="title3"
        position="RIGHT"
        component={() => <Screen3 />}
      />
       <CurvedBottomBarExpo.Screen
        name="title4"
        position="RIGHT"
        component={() => <Screen4 />}
      />
    </CurvedBottomBarExpo.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#DDDDDD',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  bottomBar: {},
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    bottom: 30,
    elevation: 3,
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen1: { flex: 1, backgroundColor: '#BFEFFF' },
  screen2: { flex: 1, backgroundColor: '#FFEBCD' },
  screen3: { flex: 1, backgroundColor: '#002366' },
  screen4: { flex: 1, backgroundColor: '#FF8C00' }
});