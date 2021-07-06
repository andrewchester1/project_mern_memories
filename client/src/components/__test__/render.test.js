import React from 'react';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer';

import Posts from '../Posts/Posts';

const mockStore = configureStore([]);

describe('My Connected React-Redux Component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      state: 'sample text'
    });

    component = renderer.create(
    <Provider store={store}>
      <Posts />
    </Provider>
    );
  });
    it("renders without crashing 1", () => {
      expect(component.toJSON()).toMatchSnapshot();
  });
});