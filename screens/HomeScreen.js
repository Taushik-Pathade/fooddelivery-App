import { View, Text, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from './Header'
import Categories from '../components/Categories'
import { featured } from '../constant'
import FeaturedRow from '../components/FeaturedRow'
import { StatusBar } from 'expo-status-bar'


const HomeScreen = () => {
  return (
    <SafeAreaView className=" bg-gray-200">
      <Header/>
      <ScrollView showsVerticalScrollIndicator={false} className="pb-15">
<Categories/>



<View className="mt-5">
  {[featured, featured, featured].map((item,index)=>{
    return(
      <FeaturedRow
      key={index}
      title={item.title}
      restaurants={item.restaurants}
      description={item.description}
    
      />
    )
  })}
</View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default HomeScreen