import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  const app = shallow(<App />);

  it('should render correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('should initialize the `state` with an empty list of gifts', () => {
    expect(app.state().gifts).toEqual([]);
  });

  describe('when clicking the add `add-gift` button', () => {
    const id = 1;
    beforeEach(() => {
      app.find('.btn-add').simulate('click');
    });

    afterEach(() => {
      app.setState({ gifts: [] });
    });
    
    it('should add a new gift to `state`', () => {
      expect(app.state().gifts).toEqual([{ id }]);
    });

    it('should add a new gift to the rendered list', () => {
      expect(app.find('.gift-list').children().length).toEqual(1);
    });

    it('should create a Gift component', () => {
      expect(app.find('Gift').exists()).toBe(true);
    });

    describe('the user wants to remove the added gift', () => {
      beforeEach(() => {
        app.instance().removeGift(id);
      });

      it('removes the gift from `state', () => {
        expect(app.state().gifts).toEqual([]);
      });
    });
  });
});