import * as ActionTypes from './actionTypes';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

class SimpsonActions {
  addSimpson(payload) {
    return {
      type: ActionTypes.ADD_SIMPSON,
      payload: payload,
    };
  }
  deleteSimpson(key) {
    return {
      type: ActionTypes.DELETE_SIMPSON,
      payload: key,
    };
  }
  getSimpsonList = () => {
    return async (dispatch, state) => {
      const simpsonData = await AsyncStorage.getItem('simpsonsData');

      if (simpsonData === null) {
        await axios
          .get('https://5fc9346b2af77700165ae514.mockapi.io/simpsons')
          .then(async res => {
            const jsonValue = JSON.stringify(res.data);
            await AsyncStorage.setItem('simpsonsData', jsonValue);
            dispatch(this.addSimpson(res.data));
          });
      } else {
        dispatch(this.addSimpson(JSON.parse(simpsonData)));
        console.log(simpsonData);
      }
    };
  };
}

export const simpsonActions = new SimpsonActions();
