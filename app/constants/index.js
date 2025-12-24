export const apiKey = 'c7ee6b153963453b8be190422252212';

const weatherImagesMap = {
    // Clear/Sunny conditions (Code: 1000)
    'Sunny': require('../../assets/images/sun.png'),
    'Clear': require('../../assets/images/sun.png'),

    // Partly cloudy conditions (Code: 1003)
    'Partly cloudy': require('../../assets/images/partlycloudy.png'),
    'Partly Cloudy ': require('../../assets/images/partlycloudy.png'),

    // Cloudy conditions (Code: 1006)
    'Cloudy': require('../../assets/images/cloud.png'),

    // Overcast conditions (Code: 1009)
    'Overcast': require('../../assets/images/cloud.png'),

    // Mist conditions (Code: 1030)
    'Mist': require('../../assets/images/mist.png'),

    // Patchy rain possible (Code: 1063)
    'Patchy rain possible': require('../../assets/images/moderaterain.png'),

    // Patchy snow possible (Code: 1066) - Use moderaterain as fallback
    'Patchy snow possible': require('../../assets/images/moderaterain.png'),

    // Patchy sleet possible (Code: 1069) - Use moderaterain as fallback
    'Patchy sleet possible': require('../../assets/images/moderaterain.png'),

    // Patchy freezing drizzle possible (Code: 1072)
    'Patchy freezing drizzle possible': require('../../assets/images/mist.png'),

    // Thundery outbreaks possible (Code: 1087) - Use heavyrain as fallback
    'Thundery outbreaks possible': require('../../assets/images/heavyrain.png'),

    // Blowing snow (Code: 1114) - Use moderaterain as fallback
    'Blowing snow': require('../../assets/images/moderaterain.png'),

    // Blizzard (Code: 1117) - Use moderaterain as fallback
    'Blizzard': require('../../assets/images/moderaterain.png'),

    // Fog (Code: 1135)
    'Fog': require('../../assets/images/mist.png'),

    // Freezing fog (Code: 1147)
    'Freezing fog': require('../../assets/images/mist.png'),

    // Patchy light drizzle (Code: 1150)
    'Patchy light drizzle': require('../../assets/images/moderaterain.png'),

    // Light drizzle (Code: 1153)
    'Light drizzle': require('../../assets/images/moderaterain.png'),

    // Freezing drizzle (Code: 1168)
    'Freezing drizzle': require('../../assets/images/moderaterain.png'),

    // Heavy freezing drizzle (Code: 1171)
    'Heavy freezing drizzle': require('../../assets/images/heavyrain.png'),

    // Patchy light rain (Code: 1180)
    'Patchy light rain': require('../../assets/images/moderaterain.png'),

    // Light rain (Code: 1183)
    'Light rain': require('../../assets/images/moderaterain.png'),

    // Moderate rain at times (Code: 1186)
    'Moderate rain at times': require('../../assets/images/moderaterain.png'),

    // Moderate rain (Code: 1189)
    'Moderate rain': require('../../assets/images/moderaterain.png'),

    // Heavy rain at times (Code: 1192)
    'Heavy rain at times': require('../../assets/images/heavyrain.png'),

    // Heavy rain (Code: 1195)
    'Heavy rain': require('../../assets/images/heavyrain.png'),

    // Light freezing rain (Code: 1198)
    'Light freezing rain': require('../../assets/images/moderaterain.png'),

    // Moderate or heavy freezing rain (Code: 1201)
    'Moderate or heavy freezing rain': require('../../assets/images/heavyrain.png'),

    // Light sleet (Code: 1204) - Use moderaterain as fallback
    'Light sleet': require('../../assets/images/moderaterain.png'),

    // Moderate or heavy sleet (Code: 1207) - Use moderaterain as fallback
    'Moderate or heavy sleet': require('../../assets/images/moderaterain.png'),

    // Patchy light snow (Code: 1210) - Use moderaterain as fallback
    'Patchy light snow': require('../../assets/images/moderaterain.png'),

    // Light snow (Code: 1213) - Use moderaterain as fallback
    'Light snow': require('../../assets/images/moderaterain.png'),

    // Patchy moderate snow (Code: 1216) - Use moderaterain as fallback
    'Patchy moderate snow': require('../../assets/images/moderaterain.png'),

    // Moderate snow (Code: 1219) - Use moderaterain as fallback
    'Moderate snow': require('../../assets/images/moderaterain.png'),

    // Patchy heavy snow (Code: 1222) - Use heavyrain as fallback
    'Patchy heavy snow': require('../../assets/images/heavyrain.png'),

    // Heavy snow (Code: 1225) - Use heavyrain as fallback
    'Heavy snow': require('../../assets/images/heavyrain.png'),

    // Ice pellets (Code: 1237) - Use moderaterain as fallback
    'Ice pellets': require('../../assets/images/moderaterain.png'),

    // Light rain shower (Code: 1240)
    'Light rain shower': require('../../assets/images/moderaterain.png'),

    // Moderate or heavy rain shower (Code: 1243)
    'Moderate or heavy rain shower': require('../../assets/images/heavyrain.png'),

    // Torrential rain shower (Code: 1246)
    'Torrential rain shower': require('../../assets/images/heavyrain.png'),

    // Light sleet showers (Code: 1249) - Use moderaterain as fallback
    'Light sleet showers': require('../../assets/images/moderaterain.png'),

    // Moderate or heavy sleet showers (Code: 1252) - Use moderaterain as fallback
    'Moderate or heavy sleet showers': require('../../assets/images/moderaterain.png'),

    // Light snow showers (Code: 1255) - Use moderaterain as fallback
    'Light snow showers': require('../../assets/images/moderaterain.png'),

    // Moderate or heavy snow showers (Code: 1258) - Use moderaterain as fallback
    'Moderate or heavy snow showers': require('../../assets/images/moderaterain.png'),

    // Light showers of ice pellets (Code: 1261) - Use moderaterain as fallback
    'Light showers of ice pellets': require('../../assets/images/moderaterain.png'),

    // Moderate or heavy showers of ice pellets (Code: 1264) - Use moderaterain as fallback
    'Moderate or heavy showers of ice pellets': require('../../assets/images/moderaterain.png'),

    // Patchy light rain with thunder (Code: 1273)
    'Patchy light rain with thunder': require('../../assets/images/moderaterain.png'),

    // Moderate or heavy rain with thunder (Code: 1276)
    'Moderate or heavy rain with thunder': require('../../assets/images/heavyrain.png'),

    // Patchy light snow with thunder (Code: 1279) - Use moderaterain as fallback
    'Patchy light snow with thunder': require('../../assets/images/moderaterain.png'),

    // Moderate or heavy snow with thunder (Code: 1282) - Use heavyrain as fallback
    'Moderate or heavy snow with thunder': require('../../assets/images/heavyrain.png'),
};

// Safe lookup function that returns appropriate image or fallback
export const getWeatherImage = (condition) => {
    if (!condition) {
         return require('../../assets/images/moderaterain.png'); 
    }

    // Try exact match first
    if (weatherImagesMap[condition]) {
        return weatherImagesMap[condition];
    }

    // Try case-insensitive match
    const lowerCondition = condition.toLowerCase().trim();
    for (const key in weatherImagesMap) {
        if (key.toLowerCase().trim() === lowerCondition) {
            return weatherImagesMap[key];
        }
    }

    // Fallback for any unmapped conditions (default to moderate rain image)
    return require('../../assets/images/moderaterain.png');
};

// Legacy export for backward compatibility
export const weatherImages = weatherImagesMap;