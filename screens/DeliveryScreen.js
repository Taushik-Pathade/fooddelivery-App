import { View, Text, Image, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import { featured } from "../constant";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import * as SolidIcon from "react-native-heroicons/solid"
import { useSelector } from "react-redux";
import { selectRestaurant } from "../slices/restaurantSlice";


const DeliveryScreen = () => {
  const restaurant = useSelector(selectRestaurant);
  const navigation = useNavigation();

  return (
    <View className="flex-1">
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        className="flex-1 "
        mapType="standard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.lng,
          }}
          title={restaurant.name}
          description={restaurant.description}

          className="bg-yellow-700"
        />
      </MapView>
      <View className="rounded-t-3xl -mt-12 bg-white relative">
        <View className="flex-row justify-between px-5 pt-10">
          <View>
            <Text className="text-lg text-gray-700 font-semibold">Estimated Arrival</Text>

            <Text className="text-3x1  text-gray-700 font-semibold">2-30 Minutes</Text>
            <Text className="mt-2 text-gray-700 font-semibold">Your order is own its way!</Text>
          </View>
          <Image source={require('../assets/images/bikeGuy2.gif')} className="w-24 h-24" />

        </View>
        <View className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2 bg-purple-600">
          <View className="p-1 rounded-full bg-primary ">
            <Image className="h-16 w-16 rounded-full "
              source={require('../assets/images/deliveryGuy.png')} />
          </View>

          <View className="flex-1 ml-3 ">
            <Text className="text-lg font-bold text-white">Syed noman </Text>
            <Text className="font-semibold text-white">Your Rider</Text>
          </View>


          <View className="flex-row items-center space-x-3 mr-3">
            <TouchableOpacity className="bg-white p-2 rounded-full">
              <SolidIcon.PhoneIcon size={25} className=" shadow text-orange-500" />
            </TouchableOpacity>


            <TouchableOpacity
              onPress={() => navigation.navigate('Home')} className="bg-white p-2 rounded-full">
              <SolidIcon.XMarkIcon size={25} className=" shadow text-orange-500" />
            </TouchableOpacity>

          </View>
        </View>
      </View>
    </View>
  );
};

export default DeliveryScreen;
