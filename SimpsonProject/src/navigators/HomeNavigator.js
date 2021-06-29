import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {UrlScreen} from '../utils/UrlScreen';
import {ListScreen} from '../screens/ListScreen';
import {DetailScreen} from '../screens/DetailScreen';
import {AddCharacterScreen} from '../screens/AddCharacterScreen';

const HomeStack = createStackNavigator();

const HomeNavigator = ({user}) => {
  return (
    <NavigationContainer>
      <HomeStack.Navigator headerMode="none" initialRouteName={UrlScreen.list}>
        <HomeStack.Screen name={UrlScreen.list} component={ListScreen} />
        <HomeStack.Screen name={UrlScreen.detail} component={DetailScreen} />
        <HomeStack.Screen name={UrlScreen.add} component={AddCharacterScreen} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default HomeNavigator;
