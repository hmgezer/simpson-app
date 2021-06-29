import React from 'react';
import {store} from '../services/redux/store';
import {Provider} from 'react-redux';
import AppLayout from './app-layout';

const App = () => {
  return (
    <Provider store={store}>
      <AppLayout />
    </Provider>
  );
};

export default App;
