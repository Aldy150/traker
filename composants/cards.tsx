import { Text, View, DimensionValue, ScrollView, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import "../global.css";

interface CardProps {
  title?: string;
  value?: string | number;
  iconName?: keyof typeof Ionicons.glyphMap;
  width?: DimensionValue;
  height?: DimensionValue;
  backgroundColor?: string;
  textColor?: string;
  iconBackgroundColor?: string;
  onPress?: () => void;
}

export default function Cards({
  title = "Titre",
  value = "Valeur",
  //iconName = "analytics-outline",
  width = "48%", // Souvent mieux pour des grilles
  height = 120,
  backgroundColor = "#fff",
  //textColor = "#333",
 // iconBackgroundColor = "#f3f4f6",
  onPress
}: CardProps) {
  return (
    <Pressable 
      onPress={onPress}
      style={{ width, height, backgroundColor, borderRadius: 16 }}
      className="p-4 shadow-sm mb-4"
    >
      {/* Section Icône */}
      {
        /*
      <View 
        style={{ backgroundColor: iconBackgroundColor }} 
        className="w-10 h-10 rounded-full items-center justify-center mb-2"
      >
        <Ionicons name={iconName} size={20} color={textColor} />
      </View>
      */
      }
      {/* Section Texte */}
      <View className='p-5'>
        <Text className="text-white text-2xl font-medium">{title}</Text>
        <Text className="text-2xl text-white font-bold">
          {value}
        </Text>
      </View>
    </Pressable>
  );
}