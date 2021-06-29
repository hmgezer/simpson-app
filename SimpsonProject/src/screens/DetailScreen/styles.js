import styled from 'styled-components';
import {View, Image as image, Text} from 'react-native';

export const HeaderWrapper = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderBottomWrapper = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 12px;
`;

export const HeaderTopWrapper = styled(View)`
  padding-top: 12px;
`;

export const TextWrapper = styled(View)`
  padding: 0px 16px;
`;

export const Image = styled(image)`
  width: 200px;
  height: 250px;
`;

export const Title = styled(Text)`
  font-size: ${({theme}) => theme.fontSize.veryBig}px;
  font-weight: bold;
  color: ${({theme}) => theme.color.BLACK_COLOR};
`;

export const Description = styled(Text)`
  font-size: ${({theme}) => theme.fontSize.big}px;
`;

export const About = styled(Text)`
  font-size: ${({theme}) => theme.fontSize.normal}px;
`;
