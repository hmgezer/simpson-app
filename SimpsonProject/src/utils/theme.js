import {Dimensions} from 'react-native';

export const themeStyle = {
  device: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  border: {
    radius: 8,
  },
  fontSize: {
    tiny: 11,
    small: 13,
    normal: 16,
    big: 18,
    veryBig: 34,
  },
  color: {
    DANGER: '#FF5454',
    BACKGROUND_COLOR: '#FFFFFF',
    PRIMARY_COLOR: '#1147AE',
    PRIMARY_BORDER_COLOR: '#CDCDCD',
    BLACK_COLOR: '#476883',
    WHITE_COLOR: '#FFFFFF',
    PRIMARY_BUTTON_COLOR: '#476883',
    PRIMARY_TEXT_COLOR: '#000000',
    SECONDARY_TEXT_COLOR: '#424242',
    DANGER_TEXT_COLOR: '#FE5E55',
  },
};

export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;
