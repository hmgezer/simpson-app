import React from 'react';
import {ScrollView} from 'react-native';
import {BackHeader} from '../../components/BackHeader';
import {
  HeaderWrapper,
  HeaderBottomWrapper,
  HeaderTopWrapper,
  TextWrapper,
  Image,
  Title,
  Description,
  About,
} from './styles';

export const DetailScreen = ({route}) => {
  const {id, item} = route.params;
  return (
    <>
      <BackHeader goBack title="Details" />
      {id === item.props.id ? (
        <ScrollView>
          <HeaderWrapper>
            <HeaderTopWrapper>
              <Image resizeMode="contain" source={{uri: item.props.avatar}} />
            </HeaderTopWrapper>
            <HeaderBottomWrapper>
              <Title>{item.props.name}</Title>
              <Description>{item.props.job}</Description>
            </HeaderBottomWrapper>
          </HeaderWrapper>
          <TextWrapper>
            <About>{item.props.about}</About>
          </TextWrapper>
        </ScrollView>
      ) : null}
    </>
  );
};
