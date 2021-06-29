import styled from 'styled-components';
import {TouchableOpacity, View, Image as image, Text} from 'react-native';

export const CardContainer = styled(TouchableOpacity)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  flex-direction: row;
  padding: 16px;
  background-color: ${({theme}) => theme.color.BACKGROUND_COLOR};
  border-radius: 16px;
  margin: 8px;
`;
export const IconTitleWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;
export const DeleteWrapper = styled(TouchableOpacity)`
  margin-left: 16px;
  width: 16px;
  height: 20px;
`;
export const Image = styled(image)`
  width: 25px;
  height: 40px;
`;
export const Title = styled(Text)`
  font-size: ${({theme}) => theme.fontSize.normal}px;
  color: ${({theme}) => theme.color.BLACK_COLOR};
  margin-left: 16px;
`;
