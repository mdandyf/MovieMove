import React, { useEffect } from 'react';
import { View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Color from '../constants/color';
import DownloadScreen from '../pages/DownloadScreen';
import TVShowScreen from '../pages/TVShowScreen';
import MovieMoveScreen from '../pages/MovieMoveScreen';
import MovieScreen from '../pages/MovieScreen';
import HomeScreen from '../pages/HomeScreen';
import PeopleScreen from '../pages/PeopleScreen';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  const HeaderLeftIcon = () => {
    return(
      <Image source={require('../assets/png/icon_small.png')} style={{width: 27, height: 27, marginLeft: 20}}/>
    )
  }

  const HeaderRightIcon = () => {
    return(
      <View style={{marginRight: 20}}>
        <Ionicons name={'search'} size={27} color={Color.black}/>
      </View>
    )
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
                return <Ionicons name={iconName} size={size} color={color} />;
            } else if (route.name === 'Movie') {
              iconName = focused
                ? 'movie-open'
                : 'movie-open-outline';
               // You can return any component that you like here!
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            } else if (route.name === 'MovieMove') {
               // You can return any component that you like here!
              return <Image source={require('../assets/png/icon_small.png')} style={{width: 30, height: 30, opacity: focused ? 1 : 0.4}}/>;
            } else if (route.name === 'TV Show') {
              iconName = focused ? 'ios-tv' : 'ios-tv-outline';
               // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            } else if (route.name === 'People') {
              iconName = focused ? 'people' : 'people-outline';
               // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            }

           
          },
          tabBarActiveTintColor: Color.primary,
          tabBarInactiveTintColor: Color.inactive,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={({ route }) => ({headerTitle: 'MovieMove', headerRight: (HeaderRightIcon), headerLeft: (HeaderLeftIcon)})} />
        <Tab.Screen name="Movie" component={MovieScreen} options={({ route }) => ({headerTitle: 'MovieMove', headerRight: (HeaderRightIcon), headerLeft: (HeaderLeftIcon)})} />
        <Tab.Screen name="MovieMove" component={MovieMoveScreen} options={({ route }) => ({headerTitle: 'MovieMove', headerRight: (HeaderRightIcon), headerLeft: (HeaderLeftIcon)})} />
        <Tab.Screen name="TV Show" component={TVShowScreen} options={({ route }) => ({headerTitle: 'MovieMove', headerRight: (HeaderRightIcon), headerLeft: (HeaderLeftIcon)})} />
        <Tab.Screen name="People" component={PeopleScreen} options={({ route }) => ({headerTitle: 'MovieMove', headerRight: (HeaderRightIcon), headerLeft: (HeaderLeftIcon)})} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
