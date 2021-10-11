import React from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Dimensions,
} from 'react-native';
import {ParallaxImage} from 'react-native-snap-carousel';
import Color from '../constants/color';
import CarouselModel from '../models/CarouselModel';

const IS_IOS = (Platform.OS === 'ios') ? true : false;
const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

const wp = (percentage: number) => {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
};
const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 8;

const image = (data: CarouselModel, parallax:boolean, parallaxProps:{}, even:boolean) => {
  return parallax ? (
    <ParallaxImage
      source={{uri: data.illustration}}
      containerStyle={[
        styles.imageContainer,
        even ? styles.imageContainerEven : {},
      ]}
      style={styles.image}
      parallaxFactor={0.35}
      showSpinner={true}
      spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
      {...parallaxProps}
    />
  ) : (
    <Image source={{uri: data.illustration}} style={styles.image} />
  );
};

const CarouselParallaxPeopleItem = (
  {item = new CarouselModel(), index = 0},
  parallaxProps = {},
) => {
    const even = (index + 1) % 2 === 0
    const uppercaseTitle = item.title ? (
        <Text
          style={[styles.title, even ? styles.titleEven : {}]}
          numberOfLines={2}
        >
            { item.title.toUpperCase() }
        </Text>
    ) : false;
  return (
    <TouchableOpacity activeOpacity={1} style={styles.slideInnerContainer}>
      <View style={styles.shadow} />
      <View
        style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>
        {image(item, true, parallaxProps, even)}
        <View style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]} />
      </View>
      <View
        style={[styles.textContainer, even ? styles.textContainerEven : {}]}>
        {uppercaseTitle}
        <Text
          style={[styles.subtitle, even ? styles.subtitleEven : {}]}
          numberOfLines={2}>
          {item.subtitle}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  slideInnerContainer: {
    width: itemWidth,
    height: slideHeight,
    paddingHorizontal: itemHorizontalMargin,
    paddingBottom: 18, // needed for shadow
  },
  shadow: {
    position: 'absolute',
    top: 0,
    left: itemHorizontalMargin,
    right: itemHorizontalMargin,
    bottom: 18,
    shadowColor: Color.black,
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 10,
    borderRadius: entryBorderRadius,
  },
  imageContainer: {
    flex: 1,
    marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderTopLeftRadius: entryBorderRadius,
    borderTopRightRadius: entryBorderRadius,
  },
  imageContainerEven: {
    backgroundColor: Color.black,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'center',
    borderRadius: IS_IOS ? entryBorderRadius : 0,
    borderTopLeftRadius: entryBorderRadius,
    borderTopRightRadius: entryBorderRadius,
  },
  // image's border radius is buggy on iOS; let's hack it!
  radiusMask: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: entryBorderRadius,
    backgroundColor: 'white',
  },
  radiusMaskEven: {
    backgroundColor: Color.black,
  },
  textContainer: {
    justifyContent: 'center',
    paddingTop: 20 - entryBorderRadius,
    paddingBottom: 20,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderBottomLeftRadius: entryBorderRadius,
    borderBottomRightRadius: entryBorderRadius,
  },
  textContainerEven: {
    backgroundColor: Color.black,
  },
  title: {
    color: Color.black,
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  titleEven: {
    color: 'white',
  },
  subtitle: {
    marginTop: 6,
    color: Color.grey,
    fontSize: 12,
    fontStyle: 'italic',
  },
  subtitleEven: {
    color: 'rgba(255, 255, 255, 0.7)',
  },
});

export default CarouselParallaxPeopleItem;
