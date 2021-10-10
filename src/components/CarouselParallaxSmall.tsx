import React, {useState} from 'react';
import {Text, View, Dimensions, StyleSheet} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import CarouselParallaxSmallItem from './CarouselParallaxSmallItem';

const CarouselParallaxSmall = ({data, title}: {data: Array<Object>, title: string}) => {
  const {width: screenWidth} = Dimensions.get('window');

  return (
    <View>
      <Text style={styles.title} numberOfLines={1}>{title}</Text>
      <Carousel
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 250}
        data={data}
        renderItem={CarouselParallaxSmallItem}
        hasParallaxImages={true}
        firstItem={1}
        loop={true}
        activeSlideAlignment="center"
      />
    </View>
  );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingTop: 20,
    }
})

export default CarouselParallaxSmall;
