import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import { Provider } from 'react-dom'
import { useSelector } from 'react-redux';
import useStyles from '../Posts/styles';

import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

import Posts from '../Posts/Posts';

it("renders without crashing 1", () => {
  // const posts = useSelector((state) => state.posts);
  // const classes = useStyles();

  shallow(<Provider><Posts /></ Provider>);
});