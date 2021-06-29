import styled from 'styled-components';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const Wrapper = styled.View`
  width: ${width}px;
  height: ${height * (60 / 896)}px;
  background-color: ${({theme}) => theme.color.BACKGROUND_COLOR};
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

export const BackButton = styled.TouchableOpacity`
  width: ${width * (60 / 414)}px;
  height: ${height * (45 / 896)}px;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 0;
`;

export const PageTitle = styled.Text`
  font-size: ${({theme}) => theme.fontSize.normal}px;
  color: ${({theme}) => theme.color.BLACK_COLOR};
  font-weight: bold;
`;
