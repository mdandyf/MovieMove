import * as React from 'react';
import {Text, View, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Color from '../constants/color';

const DownloadScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Ionicons name={'ios-download'} size={70} color={Color.inactive} />
      <Text style={{marginTop: 10}}>No Data</Text>
    </View>
  );
};

export default DownloadScreen;
