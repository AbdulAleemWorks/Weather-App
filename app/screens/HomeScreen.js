import { Image, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { theme } from '../../theme/index.js'
import {CalendarDaysIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import {MapPinIcon} from 'react-native-heroicons/solid'
import {debounce} from 'lodash';
import {getForecastData, getLocationData} from '../api/weather.js';

export default function HomeScreen() {
  const [showSearch, setShowSearch] = useState(false);
  const[locations, setLocation] = useState([]);
  const[weather, setWeather] = useState({});

  const handleLocation=(loc)=>{
    setLocation([]);
    setShowSearch(false);
    getForecastData({
      cityName: loc.name,
      days:'7'
    }).then(data=>{
      setWeather(data);
    });
  }
  const handleSearch=value=>{
    // fetch locations
    if(value.length>2){
    getLocationData({cityName:value}).then(data=>{
      setLocation(data);
    })
  }
  }
  const handleTextDebounce=useCallback(debounce(handleSearch, 1200),[]);
  const {current,location} = weather;

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
              onChangeText={handleTextDebounce}
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
        locations.length>0 && showSearch?(
          <View className='absolute w-11/12 bg-gray-300 top-32 rounded-3xl mx-3' >
            {
              locations.map((loc, index)=>{
                let showBorderIcon=true?index+1 !=locations.length:false;
                let borderClass=showBorderIcon?'border-b border-gray-500':'';
                
                return (
                  <TouchableOpacity
                  onPress={()=>handleLocation(loc)} 
                  key={index} 
                  className={' flex-row items-center border-0  p-4' + borderClass}>
                  <MapPinIcon size="30" color='gray'/>
                  <Text className='text-lg ml-2 color-black'>
                  {location?.name}, {location?.country}
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
        <Text className='text-white text-3xl font-bold'>{location?.name} ,</Text>
        <Text className='text-white text-2xl font-light'> {' '+location?.country}</Text>
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
      {/* Heading */}
      <View className='mb-2 space-y-3'>
        <View className='flex-row items-center mx-5 space-x-2'>
          <CalendarDaysIcon size="30" stroke='white'/>
          <Text className='text-white text-lg mx-2'>Daily Forecast</Text>
        </View>
        {/* Content */}
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal:15}}>
          <View 
          className='flex justify-center mt-4 mx-2 items-center w-24 rounded-3xl space-y-1 py-4'
          style={{backgroundColor:theme.bgWhite(0.1)}}>
          <Image source={require('../../assets/images/mist.png')}
          className='w-7 h-7  '/>
          <Text className='text-white text-lg'>Sunday</Text>
          <Text className='text-white text-2xl'>20°</Text>
          </View>
          <View 
          className='flex justify-center mt-4 mx-2 items-center w-24 rounded-3xl space-y-1 py-4'
          style={{backgroundColor:theme.bgWhite(0.1)}}>
          <Image source={require('../../assets/images/mist.png')}
          className='w-7 h-7  '/>
          <Text className='text-white text-lg'>Monday</Text>
          <Text className='text-white text-2xl'>20°</Text>
          </View>
          <View 
          className='flex justify-center mt-4 mx-2 items-center w-24 rounded-3xl space-y-1 py-4'
          style={{backgroundColor:theme.bgWhite(0.1)}}>
          <Image source={require('../../assets/images/mist.png')}
          className='w-7 h-7  '/>
          <Text className='text-white text-lg'>Tuesday</Text>
          <Text className='text-white text-2xl'>20°</Text>
          </View>
          <View 
          className='flex justify-center mt-4 mx-2 items-center w-24 rounded-3xl space-y-1 py-4'
          style={{backgroundColor:theme.bgWhite(0.1)}}>
          <Image source={require('../../assets/images/mist.png')}
          className='w-7 h-7  '/>
          <Text className='text-white text-lg'>Wednesday</Text>
          <Text className='text-white text-2xl'>20°</Text>
          </View>
          <View 
          className='flex justify-center mt-4 mx-2 items-center w-24 rounded-3xl space-y-1 py-4'
          style={{backgroundColor:theme.bgWhite(0.1)}}>
          <Image source={require('../../assets/images/mist.png')}
          className='w-7 h-7  '/>
          <Text className='text-white text-lg'>Thursday</Text>
          <Text className='text-white text-2xl'>20°</Text>
          </View>
          <View 
          className='flex justify-center mt-4 mx-2 items-center w-24 rounded-3xl space-y-1 py-4'
          style={{backgroundColor:theme.bgWhite(0.1)}}>
          <Image source={require('../../assets/images/mist.png')}
          className='w-7 h-7  '/>
          <Text className='text-white text-lg'>Friday</Text>
          <Text className='text-white text-2xl'>20°</Text>
          </View>
          <View 
          className='flex justify-center mt-4 mx-2 items-center w-24 rounded-3xl space-y-1 py-4'
          style={{backgroundColor:theme.bgWhite(0.1)}}>
          <Image source={require('../../assets/images/mist.png')}
          className='w-7 h-7  '/>
          <Text className='text-white text-lg'>Saturday</Text>
          <Text className='text-white text-2xl'>20°</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
    </View>
  )
}