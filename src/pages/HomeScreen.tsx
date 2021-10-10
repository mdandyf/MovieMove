import React, {useState, useEffect, useCallback} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import CarouselParallax from '../components/CarouselParallax';
import CarouselParallaxSmall from '../components/CarouselParallaxSmall';

import {
  getTopRatedMovies,
  getPopularMovies,
  getPopularTvShows,
  getUpcomingMovies,
} from '../store/actioncreator';

import {State} from '../store';
import CarouselModel from '../models/CarouselModel';
import Constant from '../constants/constant';
import MovieDetailModel from '../models/MovieDetailModel';
import Color from '../constants/color';
import TvShowDetailModel from '../models/TvShowDetailModel';

const HomeScreen = () => {
  const [screenHeight, setScreenHeight] = useState(0);

  const dispatch = useDispatch();

  const onContentSizeChange = (contentWidth = 0, contentHeight = 0) => {
    // Save the content height in state
    setScreenHeight(contentHeight);
  };

  const loadData = useCallback(async () => {
    try {
      await dispatch(getUpcomingMovies());
      await dispatch(getTopRatedMovies());
      await dispatch(getPopularMovies());
      await dispatch(getPopularTvShows());
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, []);

  const dataMovies = useSelector((state: State) => state.movies);
  const dataTvShows = useSelector((state: State) => state.tvshows);

  let carouselUpcomingData = dataMovies.isLoadingUpcomingMovies
    ? []
    : dataMovies.upcomingMovies.results === undefined
    ? []
    : dataMovies.upcomingMovies.results.map((e: MovieDetailModel) => {
        return new CarouselModel(
          e.title,
          e.original_title,
          Constant.API_IMAGE + e.poster_path,
        );
      });

  let carouselTopPickData = dataMovies.isLoadingTopPicksMovies
    ? []
    : dataMovies.topPickMovies.results === undefined
    ? []
    : dataMovies.topPickMovies.results.map((e: MovieDetailModel) => {
        return new CarouselModel(
          e.title,
          e.original_title,
          Constant.API_IMAGE + e.poster_path,
        );
      });

  let carouselPopularMovieData = dataMovies.isLoadingPopularMovies
    ? []
    : dataMovies.popularMovies.results === undefined
    ? []
    : dataMovies.popularMovies.results.map((e: MovieDetailModel) => {
        return new CarouselModel(
          e.title,
          e.original_title,
          Constant.API_IMAGE + e.poster_path,
        );
      });

  let carouselPopularTvShowData = dataTvShows.isLoadingPopularTvShows
    ? []
    : dataTvShows.popularTvShows.results === undefined
    ? []
    : dataTvShows.popularTvShows.results.map((e: TvShowDetailModel) => {
        return new CarouselModel(
          e.name,
          e.original_name,
          Constant.API_IMAGE + e.poster_path,
        );
      });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        scrollEnabled={true}
        onContentSizeChange={onContentSizeChange}>
        {carouselUpcomingData === undefined ? (
          <ActivityIndicator size="small" color={Color.primary} />
        ) : (
          <CarouselParallax data={carouselUpcomingData} />
        )}
        {carouselTopPickData === undefined ? (
          <ActivityIndicator size="small" color={Color.primary} />
        ) : (
          <CarouselParallaxSmall
            data={carouselTopPickData}
            title={'Top Picks For You'}
          />
        )}
        {carouselPopularMovieData === undefined ? (
          <ActivityIndicator size="small" color={Color.primary} />
        ) : (
          <CarouselParallaxSmall
            data={carouselPopularMovieData}
            title={'Popular Movie'}
          />
        )}
        {carouselPopularTvShowData === undefined ? (
          <ActivityIndicator size="small" color={Color.primary} />
        ) : (
          <CarouselParallaxSmall
            data={carouselPopularTvShowData}
            title={'Popular TV Show'}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingTop: 10,
  },
});

export default HomeScreen;
