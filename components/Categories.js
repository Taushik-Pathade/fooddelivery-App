import { View, Text, ScrollView, ScrollViewBase, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { categories } from "../constant";
import CartIcon from './CartIcon';
const Categories = () => {

    const [activeCategory, setActiveCategory] = useState(null)
    return (
        <View className="mt-4">
            
            <ScrollView showsHorizontalScrollIndicator={false} horizontal className="overflow-visible px-2">
                {categories.map((category, index) => {

                    let isActive = category.id == activeCategory;
                    let btnClass = isActive ? 'bg-gray-600' : 'bg-gray-200';
                    let textClass = isActive ? 'font-semibold text-gray-800' : "text-gray-500"
                    
                    return (<View className="flex justify-center items-center mr-6">
                        <TouchableOpacity className={"p-1 rounded-full shadow bg-gray-200 " + btnClass} onPress={() => setActiveCategory(category.id)}>
                            <Image source={category.image} className="h-12 w-12" />

                        </TouchableOpacity>
                        <Text className={"text-sm text-center" + textClass}>{category.name}</Text>

                    </View>)
                })}
            </ScrollView>
        </View>
    )
}

export default Categories