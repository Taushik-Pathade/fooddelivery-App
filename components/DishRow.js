import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
// import { Touchable } from 'react-native'
import * as SolidIcon from "react-native-heroicons/solid"
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart, selectCartitemsById } from '../slices/cartSlice'

const DishRow = ({ item }) => {
  const dispatch = useDispatch()
  const totalItem = useSelector(state =>selectCartitemsById(state,item.id))
  const handleIncrease=()=>{dispatch(addToCart({...item}))}
  const handleDecrease=()=>{dispatch(removeFromCart({id:item.id}))}
  return (
    <View className=" flex-row items-center bg-secondary p-3 shadow-2xl mb-3 mx-2 rounded-3xl">
      <Image className="rounded-3xl w-[100px] h-[100px] " source={item.image} />
      <View className="flex flex-1 space-y-3">
        <View className="pl-3">
          <Text className="text-xl text-white font-bold">{item.name}</Text>
          <Text className="text-txtprimary">{item.description}</Text>
        </View>
        <View className="flex-row justify-between pl-3 items-center">
          <Text className="text-lg font-bold text-txtprimary">Rs {item.price}</Text>
          <View className="flex-row items-center">
            <TouchableOpacity disabled={!totalItem.length}   onPress={handleDecrease} className="p-1 rounded-full" >
              <SolidIcon.MinusCircleIcon size={25} className="text-txtprimary shadow" />
            </TouchableOpacity >
            <Text className="px-3 text-txtprimary">{totalItem.length}</Text>
            <TouchableOpacity onPress={handleIncrease} className="p-1 rounded-full" >
              <SolidIcon.PlusCircleIcon size={25} className="text-txtprimary shadow" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default DishRow