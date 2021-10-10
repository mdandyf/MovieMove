import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import CarouselParallax from '../components/CarouselParallax';
import CarouselParallaxSmall from '../components/CarouselParallaxSmall';

import * as moviesActions from '../store/actions/movies';
import * as tvShowActions from '../store/actions/tvshows';

const HomeScreen = () => {
  const [screenHeight, setScreenHeight] = useState(0);
  
  const data = [
    {
      title: 'Beautiful and dramatic Antelope Canyon',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://i.imgur.com/UYiroysl.jpg',
    },
    {
      title: 'Earlier this morning, NYC',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
    },
    {
      title: 'White Pocket Sunset',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
      illustration: 'https://i.imgur.com/MABUbpDl.jpg',
    },
    {
      title: 'Acrocorinth, Greece',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
    },
    {
      title: 'The lone tree, majestic landscape of New Zealand',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
    },
  ];

  const dispatch = useDispatch();

  const loadTopRatedMovies = useCallback(async () => {
    try {
      await dispatch(moviesActions.getTopRatedMovies());
    } catch (err) {
      //setError(err);
    }
  }, [dispatch]);

  const loadPopularMovies = useCallback(async () => {
    try {
      await dispatch(moviesActions.getPopularMovies());
    } catch (err) {
      //setError(err);
    }
  }, [dispatch]);

  const loadPopularTvShows = useCallback(async () => {
    try {
      await dispatch(tvShowActions.getPopularTvShows());
    } catch (err) {
      //setError(err);
    }
  }, [dispatch]);

  useEffect(() => {
    loadTopRatedMovies()
    loadPopularMovies()
    loadPopularTvShows()
  }, [])

  const onContentSizeChange = (contentWidth=0, contentHeight=0) => {
    // Save the content height in state
    setScreenHeight(contentHeight)
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        scrollEnabled={true}
        onContentSizeChange={onContentSizeChange}
      >
        <CarouselParallax data={data} />
        <CarouselParallaxSmall data={data} title={'Top Picks For You'} />
        <CarouselParallaxSmall data={data} title={'Popular Movie'} />
        <CarouselParallaxSmall data={data} title={'Popular TV Show'} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingTop: 10
  },
});

export default HomeScreen;
