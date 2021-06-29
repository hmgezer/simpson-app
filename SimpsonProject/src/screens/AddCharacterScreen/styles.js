import styled from 'styled-components';
import {Card} from '../../components/Card';
import {
  Dimensions,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const {width, height} = Dimensions.get('window');

export const Wrapper = styled(View)`
  flex: 1;
  align-items: center;
`;

export const InformationWrapper = styled(View)`
  width: ${width}px;
  padding: 20px 20px 60px 20px;
  border-radius: ${({theme}) => theme.border.radius * 2}px;
  background-color: ${({theme}) => theme.color.BACKGROUND_COLOR};
`;

export const CustomTextInput = styled(TextInput)`
  height: ${height * (56 / 896)}px;

  padding-left: 16px;

  border-width: 1px;
  border-radius: ${({theme}) => theme.border.radius / 2}px;
  border-color: ${({theme}) => theme.color.PRIMARY_BORDER_COLOR};
`;
export const AddressTextInput = styled.TextInput`
  height: ${height * (100 / 896)}px;

  padding-left: 16px;
  padding-right: 16px;
  padding-top: 18px;
  border-width: 1px;
  border-radius: ${({theme}) => theme.border.radius / 2}px;
  border-color: ${({theme}) => theme.color.PRIMARY_BORDER_COLOR};
`;

export const TextView = styled(View)`
  padding-top: 20px;
  align-items: center;
  justify-content: center;
`;

export const IconView = styled(View)`
  align-items: center;
  justify-content: center;
`;

export const CenterView = styled(View)`
  margin-bottom: 16px;
`;

export const TitleText = styled(Text)`
  padding-bottom: 4px;
`;

export const PrimaryButton = styled(TouchableOpacity)`
  width: ${width * (342 / 414)}px;
  height: ${height * (48 / 896)}px;
  align-self: center;
  justify-content: center;
  align-items: center;
  margin-bottom: 22px;

  margin-top: ${height * (30 / 896)}px;

  border-radius: ${({theme}) => theme.border.radius / 2}px;
  background-color: ${({theme}) => theme.color.PRIMARY_BUTTON_COLOR};
`;

export const PrimaryButtonText = styled(Text)`
  font-size: ${({theme}) => theme.fontSize.normal}px;
  color: ${({theme}) => theme.color.WHITE_COLOR};
  padding-left: 8px;
`;
