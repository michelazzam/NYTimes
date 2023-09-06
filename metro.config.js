const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */

async function getDefaultConfiguration() {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();

  // Add SVG transformer configuration
  const config = {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"],
    },
  };

  return mergeConfig(getDefaultConfig(__dirname), config);
}

module.exports = getDefaultConfiguration();
