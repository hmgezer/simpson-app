import {ADD_SIMPSON, DELETE_SIMPSON} from './actionTypes';

const INITIAL_STATE = {simpsons: []};

const simpsonReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_SIMPSON: {
      return {simpsons: [...state.simpsons, ...action.payload]};
    }
    case DELETE_SIMPSON: {
      return {
        simpsons: state.simpsons.filter(
          simpson => simpson.id !== action.paload,
        ),
      };
    }
    default:
      return state;
  }
};

export default simpsonReducer;
