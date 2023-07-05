import { View, Text, TextInput } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import * as Icon from "react-native-heroicons/outline"

const Header = () => {
  return (
    <View>
      <StatusBar barStyle={'light-content'}/>
      <StatusBar barStyle="dark-content" />
      <View className=" flex-row items-center space-x-2 px-4 pb-6">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">

          <Icon.MagnifyingGlassIcon size={25} className="text-gray-800" />
          <TextInput placeholder='Nothing' className="ml-2 flex-1" />

          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-gray-300 ">


            <Icon.MapPinIcon size={20} className="text-gray-700" />
            <Text className="text-gray-500">New York, NYC</Text>

            <View />
          </View>

        </View>
        <View className=" bg-orange-500 p-3 rounded-full">
          <Icon.AdjustmentsVerticalIcon size={20} strokeWidth={2.5} className="text-white  rounded-full" />

        </View>
      </View>
    </View>
  )
}

export default Header