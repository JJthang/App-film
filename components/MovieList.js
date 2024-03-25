import React from 'react'
import { TouchableOpacity, View } from 'react-native'

const MovieList = ({title, data}) => {
  return (
    <View className="mb-8 space-y-4">
        <View className="mx-4 flex-row justify-between items-center">
            <Text>{title}</Text>
            <TouchableOpacity>
                <Text className="text-[#F0DE36]">See All</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default MovieList