/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import MainNavigation from './src/navigation/MainNavigation';
import appReducer from './src/store/reducers/main-reducer';

const App = () => {

  const rootReducer = combineReducers({
    // if there are many reducers, populate them into an object
    appReducerState: appReducer
  });
  
  const rootStore = createStore(rootReducer);

  return (
    <Provider store={rootStore}>
      
      <MainNavigation />
    </Provider>
  );
}

export default App;