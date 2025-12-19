import { Image, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { theme } from '../../theme/index.js'
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import {MapPinIcon} from 'react-native-heroicons/solid'


export default function HomeScreen() {
  const [showSearch, setShowSearch] = useState(false);
  const[location, setLocation] = useState(null);
  return (
    <View className="flex-1 relative">
    <StatusBar barStyle="light-content" />
      <Image blurRadius={60} source={require('../../assets/images/bg.png')}
      className='absolute h-full w-full'/>
    <SafeAreaView className="flex-1 ">
      {/* Search Section */}
      <View style={{height:'7%'}} className='mx-4 relative z-50'>
        <View className='justify-end flex-row items-center rounded-full'
        style={{backgroundColor: showSearch?theme.bgWhite(0.2):('transparent')}}>
          {
            showSearch?(
            <TextInput
              placeholder='Search for city'
              placeholderTextColor='white'
              className='pl-6 h-full flex-1 text-white text-lg font-light'
            />
            ):null
          }
          <TouchableOpacity
          onPress={() => setShowSearch(prev => !prev)}
          style ={{backgroundColor: theme.bgWhite(0.3)}}
          className='rounded-full p-3 m-1 mr-2'>
            <MagnifyingGlassIcon size="25" stroke='white' />
          </TouchableOpacity>
          </View>
      </View>
      {
        location.length>0 && showSearch?(
          <View className='absolute w-full bg-gray-300 top-16 rounded-3xl' >
            {
              location.map((loc, index)=>{
                return (
                  <TouchableOpacity 
                  key={index} 
                  className='flex-row items-center border-0  p-4 border-b border-gray-500'>
                  <MapPinIcon size="30" color='gray'/>
                  <Text className='text-lg'>
                  Isb, Pakistan
                  </Text>
                
                </TouchableOpacity>
                )
              }) 
            }
          </View>
        ):null
      }
    </SafeAreaView>
    </View>
  )
}