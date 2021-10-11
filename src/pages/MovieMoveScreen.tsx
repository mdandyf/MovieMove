import * as React from 'react';
import {Text, Image, View} from 'react-native';

const MovieMoveScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require('../assets/png/icon_small.png')} style={{opacity: 0.5}}/>
        <Text style={{marginTop: 10}}>No Data</Text>
    </View>
  );
};

export default MovieMoveScreen;
