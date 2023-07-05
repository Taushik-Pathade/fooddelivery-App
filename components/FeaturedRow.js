import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import RestaurantCard from "./RestaurantCard";
const FeaturedRow = ({ title, description, restaurants }) => {
  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-bold text-lg">{title}</Text>
          <Text className=" text-xs text-gray-500">{description}</Text>
        </View>
        <TouchableOpacity>
          <Text className="text-orange-500 font-semibold"> See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible py-5"
      >
        {
        restaurants.map((restaurant, index )=> {
return(
  <RestaurantCard 
  item={restaurant}
   key={index} 
  />

)        
        })
        }
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
