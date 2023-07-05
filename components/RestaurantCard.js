import {Image, View, Text,  TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import * as SolidIcon from "react-native-heroicons/solid"
import * as Icon from "react-native-heroicons/outline"
import { useNavigation } from '@react-navigation/native'

const RestaurantCard = ({item}) => {
  const navigation = useNavigation()
  return (

<TouchableWithoutFeedback 
onPress={()=>navigation.navigate('Restaurant',{...item})}
>
<View style={{shadowColor: "orange", shadowRadius: 7}} className="mr-6 bg-white rounded-3xl shadow-2x1 shadow-sky-300 my-10">
<Image className="h-36 w-64 rounded-3xl " source={item.image}/>
        
        <View className="px-3 pb-4 space-y-2">
         
          <Text className="text-lg font-bold pt-2">{item.name}</Text>
          <View className="flex-row items-center space-x-1">
              <SolidIcon.StarIcon size={20} className="text-yellow-500"/>
              <Text className="text-xs">
                  <Text className="text-green-700">{item.rating}</Text>
                  <Text className="text-gray-700"> ({item.reviews} review)</Text> · <Text className="font-semibold text-gray-700">{item.category}</Text>
              </Text>
          </View>
          <View className="flex-row items-center space-x-1">
              <Icon.MapPinIcon color="gray" width={15} height={15} />
              <Text className="text-gray-700 text-xs"> Nearby · {item.address}</Text>
          </View>
        </View>
      </View>
</TouchableWithoutFeedback>
  )
}

export default RestaurantCard