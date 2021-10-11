import React, { useState, useEffect, useCallback } from 'react';
import {ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { 
  getTopRatedMovies,
  getPopularMovies,
  getNowPlayingMovies,
  getUpcomingMovies
} from '../store/actioncreator';
import { State } from '../store';
import CarouselParallaxSmall from '../components/CarouselParallaxSmall';
import CarouselModel from '../models/CarouselModel';
import Constant from '../constants/constant';
import MovieDetailModel from '../models/MovieDetailModel';
import Color from '../constants/color';

const MovieScreen = () => {
  const [screenHeight, setScreenHeight] = useState(0);
  const dispatch = useDispatch();

  const onContentSizeChange = (contentWidth=0, contentHeight=0) => {
    // Save the content height in state
    setScreenHeight(contentHeight)
  };

  const loadData = useCallback(async() => {
    try {
      await dispatch(getNowPlayingMovies())
      await dispatch(getUpcomingMovies())
      await dispatch(getTopRatedMovies())
      await dispatch(getPopularMovies())
    } catch(err) {
      console.log(err)
    }
  }, [dispatch])

  useEffect(() => {
    loadData()
  }, [])

  const dataMovies = useSelector((state: State) => state.movies);
  
  let carouselUpcomingData = dataMovies.isLoadingUpcomingMovies ? [] : dataMovies.upcomingMovies.results === undefined ? [] : dataMovies.upcomingMovies.results.map((e:MovieDetailModel) => {
    return new CarouselModel(e.title, e.original_title, Constant.API_IMAGE + e.poster_path)
  });

  let carouselTopPickData = dataMovies.isLoadingTopPicksMovies ? [] : dataMovies.topPickMovies.results === undefined ? [] : dataMovies.topPickMovies.results.map((e:MovieDetailModel) => {
    return new CarouselModel(e.title, e.original_title, Constant.API_IMAGE + e.poster_path)
  });

  let carouselPopularMovieData = dataMovies.isLoadingPopularMovies ? [] : dataMovies.popularMovies.results === undefined ? [] : dataMovies.popularMovies.results.map((e:MovieDetailModel) => {
    return new CarouselModel(e.title, e.original_title, Constant.API_IMAGE + e.poster_path)
  });

  let carouselNowPlayingMovieData = dataMovies.isLoadingNowPlayingMovies ? [] : dataMovies.nowPlayingMovies.results === undefined ? [] : dataMovies.nowPlayingMovies.results.map((e:MovieDetailModel) => {
    return new CarouselModel(e.title, e.original_title, Constant.API_IMAGE + e.poster_path)  
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        scrollEnabled={true}
        onContentSizeChange={onContentSizeChange}
      >
        {carouselTopPickData === undefined ?
           <ActivityIndicator size="small" color={Color.primary} /> 
           :
           <CarouselParallaxSmall data={carouselTopPickData} title={'Top Rated Movie'} />
        }
        {carouselUpcomingData === undefined ?
          <ActivityIndicator size="small" color={Color.primary} /> 
          :
          <CarouselParallaxSmall data={carouselUpcomingData} title={'Upcoming Movie'} />
        }
        {carouselNowPlayingMovieData === undefined ?
          <ActivityIndicator size="small" color={Color.primary} /> 
          :
          <CarouselParallaxSmall data={carouselNowPlayingMovieData} title={'Now Playing Movie'} />
        }
        {carouselPopularMovieData === undefined ?
          <ActivityIndicator size="small" color={Color.primary} /> 
          :
          <CarouselParallaxSmall data={carouselPopularMovieData} title={'Popular Movie'} />
        }
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
