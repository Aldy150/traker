import { Text, View, StyleSheet } from 'react-native';
 import { Link } from 'expo-router';
 import Navigation from './(tabs)/_layout' ;


export default function Index() {
  return (
    <View className='flex justify-center items-center h-screen' >
      <Text className='text-green-500 text-2xl'>Welcome to Traker!</Text>
      <Link href="/about" className='text-red-500 mt-4'>
        Go to About
      </Link>
      <Navigation />
    </View>
  );
}
