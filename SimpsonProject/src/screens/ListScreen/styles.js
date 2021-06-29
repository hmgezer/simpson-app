import {View, TouchableOpacity, Text} from 'react-native';
import styled from 'styled-components';

export const Header = styled(View)`
  background: white;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;
export const PageTitle = styled(Text)`
  font-size: ${({theme}) => theme.fontSize.normal}px;
  color: ${({theme}) => theme.color.BLACK_COLOR};
  font-weight: bold;
  padding: 18px 0px;
`;

export const ButtonWrapper = styled(TouchableOpacity)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

export const PlusButton = styled(View)`
  width: 50px;
  height: 50px;
  background-color: ${({theme}) => theme.color.BACKGROUND_COLOR};
  padding: 10px;
  border-radius: 25px;
`;
