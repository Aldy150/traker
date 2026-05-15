import { Text, View, DimensionValue, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

interface CardProps {
  title?: string;
  value?: string | number;
  iconName?: keyof typeof Ionicons.glyphMap;
  width?: DimensionValue;
  height?: DimensionValue;
  backgroundColor?: string;
  textColor?: string;
  titleSize?: number;
  valueSize?: number;
}

export default function Cards({
  title, value, iconName, width = "100%", height, 
  backgroundColor = "#fff", textColor = "#1e293b", 
  titleSize = 14, valueSize = 24 
}: CardProps) {
  return (
    <Pressable 
      style={{ 
        width, height, backgroundColor, 
        borderRadius: 24, // Bords très arrondis = moderne
        padding: 20,
        marginBottom: 16,
        // Ombre style iOS/Android subtile
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2, 
      }}
    >
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ color: textColor, fontSize: titleSize, fontWeight: '600', opacity: 0.7 }}>
            {title}
          </Text>
          {iconName && (
            <View style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: 6, borderRadius: 12 }}>
                <Ionicons name={iconName} size={18} color={textColor} />
            </View>
          )}
        </View>
        
        <Text style={{ color: textColor, fontSize: valueSize, fontWeight: '800', letterSpacing: -0.5 }}>
          {value}
        </Text>
      </View>
    </Pressable>
  );
}