import { Image, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { theme } from '../../theme/index.js'
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import {MapPinIcon} from 'react-native-heroicons/solid'


export default function HomeScreen() {
  const [showSearch, setShowSearch] = useState(false);
  const[location, setLocation] = useState([1,2,3]);
  const handleLocation=(loc)=>{
    //fetch weather here
  }
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
              className='pl-6 h-full flex-1 text-white text-lg font-light rounded-full'
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
          <View className='absolute w-11/12 bg-gray-300 top-32 rounded-3xl mr-3 ml-3' >
            {
              location.map((loc, index)=>{
                let showBorderIcon=true?index+1 !=location.length:false;
                let borderClass=showBorderIcon?'border-b border-gray-500':'';
                
                return (
                  <TouchableOpacity
                  onPress={()=>handleLocation(loc)} 
                  key={index} 
                  className={'flex-row items-center border-0  p-4 ' + borderClass}>
                  <MapPinIcon size="30" color='gray'/>
                  <Text className='text-lg ml-2 color-black'>
                  Isb, Pakistan
                  </Text>
                </TouchableOpacity>
                )
              }) 
            }
          </View>
        ):null
      }
      {/* Location Section */}
      <View className='flex-row items-center justify-start mx-4 mb-8'>
        <MapPinIcon size="25" color={theme.bgWhite(0.8)} />
        <Text className='text-white text-3xl font-bold'>Islamabad ,</Text>
        <Text className='text-white text-2xl font-light'> Pakistan</Text>
      </View>
      {/* Image */}
      <View className='flex-row items-center justify-center mx-4 mb-1'>
        <Image source={require('../../assets/images/cloud.png')}
        className='w-64 h-64 mt-20'/>
      </View>
      {/* Forecast Section */}
      <View className='flex-1 justify-around flex mx-1 mb-2'>
        <Text className='text-white text-7xl text-center font-light '>25°</Text>
        <Text className='text-white text-3xl text-center font-semibold tracking-widest'>Partly Cloudy</Text>
      </View>
      {/* Extra Info */}
      <View className='flex-row items-center justify-between mx-4 mb-10 space-x-4'>
        <View className='flex-row space-x-2 items-center'>
          <Image source={require('../../assets/icons/wind.png')}
            className='w-7 h-7'
          />
          <Text className='text-white text-lg ml-2'>10 km/h</Text>
        </View>
        <View className='flex-row space-x-2 items-center'>
          <Image source={require('../../assets/icons/drop.png')}
            className='w-7 h-7'
          />
          <Text className='text-white text-lg ml-2'>40%</Text>
        </View>
        <View className='flex-row space-x-2 items-center'>
          <Image source={require('../../assets/icons/sun.png')}
            className='w-7 h-7'
          />
          <Text className='text-white text-lg ml-2'>22%</Text>
        </View>
      </View>
      {/* Weekly Forecast */}
      <View className='mb-2 space-y-3'>
        <Text className='text-white text-lg font-light'>Weekly Forecast</Text>
      </View>
    </SafeAreaView>
    </View>
  )
}