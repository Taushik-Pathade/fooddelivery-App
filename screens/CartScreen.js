import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
// import { SolidIcon } from "../Icon";
import { useNavigation } from "@react-navigation/native";
import { featured } from "../constant";
import * as SolidIcon  from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../slices/restaurantSlice";
import {
  removeFromCart,
  selectCartItems,
  selectCartTotal,
} from "../slices/cartSlice";

const CartScreen = () => {
  const navigation = useNavigation();

  const restaurant = useSelector(selectRestaurant);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const [groupedItems, setGroupedItems] = useState([]);
  const dispatch = useDispatch();
const deliverFee = 40
  // const restaurant = featured.restaurants[0]


  useEffect(() => {
    const items = cartItems.reduce((group, item) => {
      if (group[item.id]) {
        group[item.id].push(item);
      } else {
        group[item.id] = [item];
      }

      return group;
    }, {});
    setGroupedItems(items);
  }, [cartItems]);
  return (
    <View className="bg-txtsecondary flex-1">
<View className="relative py-4 shadow-sm">
<TouchableOpacity onPress={()=>navigation.goBack()} className="absolute z-10 rounded-full p-1 shadow top-5 left-2 ">

<View className="bg-txtprimary rounded-full mt-3">
<SolidIcon.ArrowLeftIcon size={27} className="text-primary"/>
</View>  
</TouchableOpacity>
<View >
<Text  className="text-center font-bold text-xl p-1 ">Your Cart</Text>
<Text  className="text-center  text-gray-500  ">{restaurant.name}</Text>
</View>

</View>
<View className=" flex-row px-4 items-center bg-primary">
  <Image source={require('../assets/images/bikeGuy.png')} className="w-20 h-20 "/>
<Text className="flex-1 pl-4 "> Deliver in 20-30 Munites</Text>
<TouchableOpacity>
<Text className="font-bold text-secondary"> Change</Text>

</TouchableOpacity>
</View>
<ScrollView className="bg-txtsecondary pt-5">
  {
   Object.entries(groupedItems).map(([key, items])=>{

    const dish = items[0]
      return(
        <View key={key} className="flex-row items-center space-x-3 py-2 px-4 bg-txtprimary rounded-3xl mx-2  mb-3 shadow-sm ">
<Text className="font-bold text-secondary">{items.length} x</Text>
        <Image source={dish.image} className="h-14 w-14 rounded-full"/>
        <Text className="flex-1 font-bold text-gray-700">{dish.name}</Text>
        <Text className=" font-semibold text-base">Rs{dish.price}</Text>
        <TouchableOpacity onPress={()=>dispatch(removeFromCart({id: dish.id}))}

  className="p-1 rounded-full">
<SolidIcon.MinusCircleIcon  size={30} className="text-secondary"/>
  </TouchableOpacity>
        </View>
      )
    })
  }
</ScrollView>
<View className="p-6 px-8 rounded-t-3xl bg-primary">
  <View className="flex-row justify-between">
    <Text className=" text-gray-700">Subtotal</Text>
    <Text className="text-gray-700">Rs {cartTotal}</Text>
  </View>
  <View className="flex-row justify-between">
    <Text className=" text-gray-700">Delivery fees</Text>
    <Text className="text-gray-700">Rs {deliverFee}</Text>
  </View>
  <View className="flex-row justify-between">
    <Text className=" text-gray-700 font-extrabold">Order Total</Text>
    <Text className="text-gray-700 font-extrabold">Rs {cartTotal+deliverFee}</Text>
  </View>
  <View>
  <TouchableOpacity 
  onPress={()=> navigation.navigate('OrderPreparing')}
  className="p-3 rounded-full text-opacity-20 bg-secondary mt-5">
    <Text className="text-gray-800 text-center font-bold text-lg">Place order</Text>

  </TouchableOpacity>
</View>
  
</View>
    </View>
  )
}

export default CartScreen