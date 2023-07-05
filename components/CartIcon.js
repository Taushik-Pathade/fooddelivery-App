import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Touchable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../slices/cartSlice'

const CartIcon = () => {
  const navigation = useNavigation();
  const cartItem = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal)
  if(!cartItem.length) return;
  return ( 

    <View className="absolute bottom-5  w-[90%] mx-5 rounded-full z-50  bg-primary  ">
    <TouchableOpacity onPress={()=> navigation.navigate('Cart')} className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg">
        <View className="p-2 px-4 rounded-full bg-orange-600">
    <Text className="font-extrabold text-white text-lg">{cartItem.length}</Text>
    </View>
     <Text className="flex-1 text-center font-extrabold text-white text-lg">View Crat
    </Text>
    <Text className="font-extrabold text-white text-lg">Rs {cartTotal}</Text>
    </TouchableOpacity>
  
</View>
  
  )
}

export default CartIcon