import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import CarouselParallaxSmall from '../components/CarouselParallaxSmall';

import * as tvShowActions from '../store/actions/tvshows';
import dummyData from '../constants/dummydata';

const TvShowScreen = () => {
  const [screenHeight, setScreenHeight] = useState(0);
  const dispatch = useDispatch();

  const loadTopRatedTvShows = useCallback(async () => {
    try {
      await dispatch(tvShowActions.getTopRatedTvShows());
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
    loadTopRatedTvShows()
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
        <CarouselParallaxSmall data={dummyData} title={'Popular TV Show'} />
        <CarouselParallaxSmall data={dummyData} title={'Top Rated TV Show'} />
        <CarouselParallaxSmall data={dummyData} title={'On The Air TV Show'} />
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

export default TvShowScreen;
