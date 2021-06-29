import {View} from 'react-native';
import styled from 'styled-components';

export const Card = styled(View)`
  background-color: ${props => props.theme.color.PRIMARY_FOREGROUND_COLOR};
  margin-bottom: ${props => props.theme.spacing.normal}px;
  padding: ${props => props.theme.spacing.normal}px;
  border-radius: 10px;
  shadow-color: ${props => props.theme.color.PRIMARY_COLOR};
  shadow-offset: 0px 6px;
  shadow-opacity: 0.1;
  shadow-radius: 8px;

  elevation: 8;
`;

export const shadow = {
  shadowColor: '#39996D',
  shadowOffset: {width: 0, height: 2},
  shadowOpacity: 0.1,
  shadowRadius: 12,
  elevation: 8,
};
