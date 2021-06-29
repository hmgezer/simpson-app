import {combineReducers} from 'redux';
import simpsonReducer from './simpson/reducer';

const allReducers = {
  simpson: simpsonReducer,
};

export const rootReducer = combineReducers(allReducers);
