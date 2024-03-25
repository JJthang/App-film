import React from 'react'
import { Platform, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import CarouselComponent from '../../../components/Carousel.js';

const Login = () => {
  const android =  Platform.OS == 'ios'
  return (
    <View className="flex-1 bg-neutral-800">
      <SafeAreaView className={android ? 'my-3' : 'mt-8 mb-3' }>
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center px-3">
          <Bars3CenterLeftIcon strokeWidth={2} size={25} color={'white'} />
          <Text className="text-[#F0DE36] text-2xl font-bold">M<Text className="text-white">ovies</Text></Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon size={25} strokeWidth={2} color={'white'} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <CarouselComponent />
    </View>
  )
}

export default Login