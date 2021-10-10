import React from 'react';
import {View, Text, StyleSheet, Dimensions, Platform} from 'react-native';
import {ParallaxImage} from 'react-native-snap-carousel';

const {width: screenWidth} = Dimensions.get('window');

const defaultItem = {
  title:'',
  subtitle:'',
  illustration:'',
};

const defaultIndex = 1;

const CarouselParallaxItem = ({item = defaultItem, index = defaultIndex}, parallaxProps={}) => {
  return (
    <View style={styles.item} key={index}>
      <ParallaxImage
        source={{uri: item.illustration}}
        containerStyle={styles.imageContainer}
        style={styles.image}
        parallaxFactor={0.4}
        {...parallaxProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: screenWidth - 60,
    height: screenWidth - 210,
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
    resizeMode: 'cover',
  },
});

export default CarouselParallaxItem;