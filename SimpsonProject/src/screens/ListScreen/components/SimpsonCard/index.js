import React from 'react';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  CardContainer,
  IconTitleWrapper,
  DeleteWrapper,
  Image,
  Title,
} from './styles';
import DeleteIcon from '../../../../assets/svgIcons/DeleteIcon';
import {UrlScreen} from '../../../../utils/UrlScreen';
import {simpsonActions} from '../../../../services/redux/simpson/action';

export const SimpsonCard = ({id, props}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const deleteItem = key => {
    dispatch(simpsonActions.deleteSimpson(key));
  };
  return (
    <CardContainer
      onPress={() =>
        navigation.navigate(UrlScreen.detail, {
          id: id,
          item: {props},
        })
      }>
      <IconTitleWrapper>
        <Image resizeMode="contain" source={{uri: props.avatar}} />
        <Title>{props.name}</Title>
      </IconTitleWrapper>
      <DeleteWrapper
        onPress={() => {
          deleteItem(props.id);
        }}>
        <DeleteIcon />
      </DeleteWrapper>
    </CardContainer>
  );
};
