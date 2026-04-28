const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

// Ajout du support pour les fichiers .mjs (nécessaire pour d3-shape)
config.resolver.sourceExts.push('mjs');

module.exports = withNativeWind(config, { 
  input: './global.css'
});