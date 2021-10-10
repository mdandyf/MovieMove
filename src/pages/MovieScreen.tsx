import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import CarouselParallaxSmall from '../components/CarouselParallaxSmall';

import * as moviesActions from '../store/actions/movies';
import dummyData from '../constants/dummydata';

const MovieScreen = () => {
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

  const loadUpcomingMovies = useCallback(async () => {
    try {
      await dispatch(moviesActions.getUpcomingMovies());
    } catch (err) {
      //setError(err);
    }
  }, [dispatch]);

  const loadNowPlayingMovies = useCallback(async () => {
    try {
      await dispatch(moviesActions.getNowPlayingMovies());
    } catch (err) {
      //setError(err);
    }
  }, [dispatch]);

  useEffect(() => {
    loadTopRatedMovies()
    loadPopularMovies()
    loadUpcomingMovies()
    loadNowPlayingMovies()
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
        <CarouselParallaxSmall data={dummyData} title={'Top Rated Movie'} />
        <CarouselParallaxSmall data={dummyData} title={'Upcoming Movie'} />
        <CarouselParallaxSmall data={dummyData} title={'Now Playing Movie'} />
        <CarouselParallaxSmall data={dummyData} title={'Popular Movie'} />
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

export default MovieScreen;
