import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import ReactDOM, { Provider } from 'react-dom';

import App from '../../App';

Enzyme.configure({adapter: new Adapter()});
test("renders without crashing", () => {
    //const div = document.createElement("div");
    const wrapper = shallow(<Provider><App /></Provider>);

    expect(wrapper.find('AppBar.classes.appBar').exists()).toBe(true);
})