import React, { useState, useEffect, useCallback } from 'react';
import {ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {State} from '../store';
import CarouselParallaxSmall from '../components/CarouselParallaxSmall';

import {
  getPopularTvShows,
  getOnTheAirTvShows,
  getTopRatedTvShows,
} from '../store/actioncreator';
import TvShowDetailModel from '../models/TvShowDetailModel';
import CarouselModel from '../models/CarouselModel';
import Constant from '../constants/constant';
import Color from '../constants/color';

const TvShowScreen = () => {
  const [screenHeight, setScreenHeight] = useState(0);

  const dispatch = useDispatch();

  const onContentSizeChange = (contentWidth=0, contentHeight=0) => {
    // Save the content height in state
    setScreenHeight(contentHeight)
  };

  const loadData = useCallback(async () => {
    try {
      await dispatch(getPopularTvShows());
      await dispatch(getTopRatedTvShows())
      await dispatch(getOnTheAirTvShows())
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, []);

  const dataTvShows = useSelector((state: State) => state.tvshows);

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

  let carouselTopRatedTvShowData = dataTvShows.isLoadingTopRatedTvShows
    ? []
    : dataTvShows.topRatedTvShows.results === undefined
    ? []
    : dataTvShows.topRatedTvShows.results.map((e: TvShowDetailModel) => {
        return new CarouselModel(
          e.name,
          e.original_name,
          Constant.API_IMAGE + e.poster_path,
        );
      });

    let carouselOverTheAirTvShowData = dataTvShows.isLoadingOtaTvShows
      ? []
      : dataTvShows.otaTvShows.results === undefined
      ? []
      : dataTvShows.otaTvShows.results.map((e: TvShowDetailModel) => {
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
        onContentSizeChange={onContentSizeChange}
      >
        {carouselPopularTvShowData === undefined ? (
          <ActivityIndicator size="small" color={Color.primary} />
        ) : (
          <CarouselParallaxSmall
            data={carouselPopularTvShowData}
            title={'Popular TV Show'}
          />
        )}
        {carouselTopRatedTvShowData === undefined ? (
          <ActivityIndicator size="small" color={Color.primary} />
        ) : (
          <CarouselParallaxSmall
            data={carouselTopRatedTvShowData}
            title={'Top Rated TV Show'}
          />
        )}
        {carouselOverTheAirTvShowData === undefined ? (
          <ActivityIndicator size="small" color={Color.primary} />
        ) : (
          <CarouselParallaxSmall
            data={carouselOverTheAirTvShowData}
            title={'On The Air TV Show'}
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
    paddingTop: 10
  },
});

export default TvShowScreen;
