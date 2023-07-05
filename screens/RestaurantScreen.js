import { View, Text, ScrollView, Touchable, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as SolidIcon from "react-native-heroicons/solid"
import * as Icon from "react-native-heroicons/outline"
import DishRow from '../components/DishRow'
import CartIcon from '../components/CartIcon'
import { StatusBar } from 'expo-status-bar'
import { useDispatch } from 'react-redux'
import { setRestaurant } from '../slices/restaurantSlice'


const RestaurantScreen = () => {
  const { params } = useRoute()
  const item = params
  const dispatch =useDispatch();
  //   console.log('restaurant:', item)
  const navigation = useNavigation()
useEffect(()=>{
if(item && item.id){
  dispatch(setRestaurant({...item}))
}
},[])
  return (
    <View>
 <StatusBar barStyle={'light-content'}/>


     
      <ScrollView>
        <View>
          <Image className="w-full h-72" source={item.image} />
          <TouchableOpacity onPress={() => navigation.goBack()} className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow">
            <SolidIcon.ArrowLeftIcon size={23} className="text-orange-500 shadow" />
          </TouchableOpacity>

          <View className=" bg-white -mt-12 pt-6 rounded-tr-3xl rounded-tl-3xl">
            <View className="px-5 border-r-8">
              <Text className="text-3xl font-bold">{item.name}</Text>
              <View className="flex-row space-x-2 my-1">
                <View className="flex-row items-center space-x-1">
                  <SolidIcon.StarIcon size={20} className="text-yellow-500" />
                  <Text className="text-xs">
                    <Text className="text-green-700">{item.rating}</Text>
                    <Text className="text-gray-700"> ({item.reviews} review)</Text> · <Text className="font-semibold text-gray-700">{item.category}</Text>
                  </Text>
                </View>
                <View className="flex-row items-center space-x-1">
                  <Icon.MapPinIcon color="gray" width={15} height={15}  />
                  <Text className="text-gray-700 text-xs"> Nearby · {item.address}</Text>
                </View>
              </View>
            </View>

<Text className="text-gray-500">{item.description}</Text>

          </View>
        </View>
        <View className="pb-36 bg-white">
          <Text className="p-4 text-2xl font-bold">Menu</Text>
          {item.dishes.map((dish, index)=><DishRow item={{...dish}}key={index}/>)}
        </View>
      </ScrollView>
      <CartIcon/>
    </View>
  )
}

export default RestaurantScreen