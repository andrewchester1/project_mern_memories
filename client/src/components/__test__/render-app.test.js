import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from '../../App';
import store from '../../index'

import { render } from '@testing-library/react';

test("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.getElementById('root'),
      );
})