import React from 'react';
import HomeNavigator from './HomeNavigator';
import {SafeAreaView, View} from 'react-native';

const AppNavigator = () => {
  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <HomeNavigator />
      </SafeAreaView>
    </View>
  );
};

export default AppNavigator;
