import React from 'react';
import {SafeAreaView} from 'react-native';
import {Wrapper, BackButton, PageTitle} from './styles';
import {BackArrowIcon} from '../../assets/svgIcons/BackArrowIcon';
import {useNavigation} from '@react-navigation/native';
import {UrlScreen} from '../../utils/UrlScreen';

export const BackHeader = ({routeName, title, goBack}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Wrapper>
        <BackButton
          onPress={() =>
            goBack
              ? navigation.goBack()
              : navigation.navigate(UrlScreen[routeName])
          }>
          <BackArrowIcon />
        </BackButton>
        <PageTitle>{title}</PageTitle>
      </Wrapper>
    </SafeAreaView>
  );
};
