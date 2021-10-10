import React from 'react';
import {View, Text, StyleSheet, Dimensions, Platform, TouchableOpacity} from 'react-native';
import {ParallaxImage} from 'react-native-snap-carousel';
import CarouselModel from '../models/CarouselModel';
import DetailScreen from '../pages/DetailScreen';

const {width: screenWidth} = Dimensions.get('window');

const defaultIndex = 1;

const CarouselParallaxItem = ({item = new CarouselModel(), index = defaultIndex}, parallaxProps={}) => {
  return (
    <TouchableOpacity style={styles.item} key={index}>
      <ParallaxImage
        source={{uri: item.illustration}}
        containerStyle={styles.imageContainer}
        style={styles.image}
        parallaxFactor={0.4}
        {...parallaxProps}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    width: screenWidth - 20,
    height: screenWidth - 120,
  },
  title: {},
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'center',
  },
});

export default CarouselParallaxItem;
