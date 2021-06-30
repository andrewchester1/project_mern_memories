import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
const { configureStore } = require('redux-mock-store')

Enzyme.configure({adapter: new Adapter()});

import Post from '../Posts/Post/Post'

const middlewares = []
const mockStore = configureStore(middlewares)

const initialState = {}
  const store = mockStore(initialState)

  store.dispatch(addTodo())

it("renders without crashing 1", () => {
  const post = shallow(<Provider store={store}><Post /></Provider>);
});