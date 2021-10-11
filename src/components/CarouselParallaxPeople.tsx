import React, {useState} from 'react';
import {View, Dimensions, StyleSheet, Text} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import CarouselModel from '../models/CarouselModel';
import CarouselParallaxPeopleItem from './CarouselParallaxPeopleItem';

const CarouselParallaxPeople = ({data, title}: {data: Array<CarouselModel>, title: string}) => {
  const {width: screenWidth} = Dimensions.get('window');

  return (
    <View>
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      <Carousel
        shouldComponentUpdate={true}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 85}
        data={data}
        renderItem={CarouselParallaxPeopleItem}
        hasParallaxImages={true}
        firstItem={1}
        loop={true}
        activeSlideAlignment="center"
        contentContainerCustomStyle={{
          minWidth: screenWidth * data.length,
        }}
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

export default CarouselParallaxPeople;
