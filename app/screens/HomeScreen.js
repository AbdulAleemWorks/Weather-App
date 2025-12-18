import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export class HomeScreen extends Component {
  componentDidMount() {
    console.log('✅ HomeScreen component mounted');
  }

  render() {
    console.log('📱 HomeScreen rendering');
    return (
      <View className="flex-1 bg-blue-500">
        {/* Location */}
        <View className="flex-row justify-center mt-10">
          <Text className="text-white text-xl font-bold">New York</Text>
        </View>

        {/* Temperature and Condition */}
        <View className="flex-1 justify-center items-center">
          <Text className="text-white text-6xl font-bold">25°</Text>
          <Text className="text-white text-xl mt-2">Sunny</Text>
        </View>

        {/* Additional Info */}
        <View className="flex-row justify-between px-10 mb-10">
          <View className="items-center">
            <Text className="text-white text-lg">Humidity</Text>
            <Text className="text-white text-lg font-bold">60%</Text>
          </View>
          <View className="items-center">
            <Text className="text-white text-lg">Wind</Text>
            <Text className="text-white text-lg font-bold">5 km/h</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default HomeScreen