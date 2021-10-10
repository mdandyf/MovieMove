import React, { useState } from 'react';
import {View, Dimensions} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import CarouselModel from '../models/CarouselModel';
import CarouselParallaxItem from './CarouselParallaxItem';

const CarouselParallax = ({data}:{data:Array<CarouselModel>}) => {
  const {width: screenWidth} = Dimensions.get('window');

  return (
    <View>
      <Carousel
        shouldComponentUpdate={true}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 85}
        data={data}
        renderItem={CarouselParallaxItem}
        hasParallaxImages={true}
        firstItem={1}
        loop={true}
        activeSlideAlignment="center"
        contentContainerCustomStyle={{
          minWidth: screenWidth * data.length
        }}
      />
    </View>
  );
};

export default CarouselParallax;
