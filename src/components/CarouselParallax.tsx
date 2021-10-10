import React, { useState } from 'react';
import {View, Dimensions} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import CarouselParallaxItem from './CarouselParallaxItem';

const CarouselParallax = ({data}:{data:Array<Object>}) => {
  const {width: screenWidth} = Dimensions.get('window');

  return (
    <View>
      <Carousel
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={data}
        renderItem={CarouselParallaxItem}
        hasParallaxImages={true}
        firstItem={1}
        loop={true}
        activeSlideAlignment="center"
      />
    </View>
  );
};

export default CarouselParallax;
