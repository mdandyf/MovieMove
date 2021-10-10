import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {State} from '../store';
import CarouselParallaxSmall from '../components/CarouselParallaxSmall';

import {getPopularPeople} from '../store/actioncreator';
import PeopleDetailModel from '../models/PeopleDetailModel';
import CarouselModel from '../models/CarouselModel';
import Constant from '../constants/constant';
import Color from '../constants/color';
import CarouselParallaxPeople from '../components/CarouselParallaxPeople';

const PeopleScreen = () => {
  const [screenHeight, setScreenHeight] = useState(0);

  const dispatch = useDispatch();

  const onContentSizeChange = (contentWidth = 0, contentHeight = 0) => {
    // Save the content height in state
    setScreenHeight(contentHeight);
  };

  const loadData = useCallback(async () => {
    try {
      await dispatch(getPopularPeople());
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, []);

  const dataPeople = useSelector((state: State) => state.people);

  let carouselPopularPeople = dataPeople.isLoadingPopularPeople
    ? []
    : dataPeople.popularPeople.results === undefined
    ? []
    : dataPeople.popularPeople.results.map((e: PeopleDetailModel) => {
        return new CarouselModel(
          e.name,
          e.known_for_department,
          Constant.API_IMAGE + e.profile_path,
        );
      });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        scrollEnabled={true}
        onContentSizeChange={onContentSizeChange}>
        {carouselPopularPeople === undefined ? (
          <ActivityIndicator size="small" color={Color.primary} />
        ) : (
          <CarouselParallaxPeople
            data={carouselPopularPeople}
            title={'Popular People'}
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

export default PeopleScreen;
