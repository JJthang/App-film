import * as React from "react";
import { Dimensions, Image, Text, TouchableWithoutFeedback, View } from "react-native";
import Carousel from "react-native-snap-carousel";

var { width, height } = Dimensions.get('window');

const CarouselComponent = () => {
  const MovieCard = () => {
    return <>
      <TouchableWithoutFeedback>
        <Image source={require('../assets/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_FMjpg_UX1000_.jpg')} className="rounded-3xl" style={{ width: width * 0.6, height: height * 0.4 }} />
      </TouchableWithoutFeedback>
    </>
  }
  return (
    <View className="flex-1">
      <Text className="text-white py-2 px-3">Trending</Text>
      <Carousel
        firstItem={1}
        data={[...new Array(6).keys()]}
        renderItem={(_, index) => (<MovieCard width={width} />)}
        sliderWidth={width}
        itemWidth={width * 0.62}
        inactiveSlideOpacity={0.60}
        slideStyle={{ display: 'flex', alignItems: 'center' }}
      />
    </View>
  );
};
export default CarouselComponent;

