import * as React from 'react';

import { Platform } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

const MainNavigation = createDrawerNavigator({
    /* Meals: { screen: MealsFavTabNavigator, navigationOptions: { drawerLabel: 'The Meals' } },
    Filters: { screen: FilterNavigator, navigationOptions: { drawerLabel: 'Filter Meal' } }
 */}, {
    contentOptions: {
        //activeTintColor: Color.secondary, // set the color of selection at the drawer to orange
    }
});

export default createAppContainer(MainNavigation);