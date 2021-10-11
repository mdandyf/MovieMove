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
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import MainNavigation from './src/navigation/MainNavigation';
import reducer from './src/store/reducers/index'

export default function App() {
  
  const store = createStore(reducer, {}, applyMiddleware(thunk));

  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}

