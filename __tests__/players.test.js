import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Players from '../pages/players';
import PlayerCard from '../components/card';

import data from '../__mocks__/data.js';

import configureStore from 'redux-mock-store'


const mockStore = configureStore()

describe('Global Test Suite', () => {
  const initialState = { players: data }
  let store, container
  beforeEach(() => {
    store = mockStore(initialState)
    container = mount(<Players store={store} />)
  })

  it('renders all cards of data players', () => {
    expect(container.find(PlayerCard).length).toEqual(2);
  });
});
