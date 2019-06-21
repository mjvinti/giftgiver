import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />);

it('should render correctly', () => {
  expect(app).toMatchSnapshot();
});

it('should initialize the `state` with an empty list of gifts', () => {
  expect(app.state().gifts).toEqual([]);
});

it('should add a new gift to `state` when clicking the `add gift` button', () => {
  app.find('.btn-add').simulate('click');

  expect(app.state().gifts).toEqual([{ id: 1 }]);
});

it('should add a new gift to the rendered list when clicking the `add gift` button', () => {
  app.find('.btn-add').simulate('click');

  expect(app.find('.gift-list').children().length).toEqual(2);
});