import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import CarouselParallax from '../components/CarouselParallax';
import CarouselParallaxSmall from '../components/CarouselParallaxSmall';

import * as moviesActions from '../store/actions/movies';
import * as tvShowActions from '../store/actions/tvshows';
import dummyData from '../constants/dummydata';

const HomeScreen = () => {
  const [screenHeight, setScreenHeight] = useState(0);

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
        <CarouselParallax data={dummyData} />
        <CarouselParallaxSmall data={dummyData} title={'Top Picks For You'} />
        <CarouselParallaxSmall data={dummyData} title={'Popular Movie'} />
        <CarouselParallaxSmall data={dummyData} title={'Popular TV Show'} />
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
