import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';

import Header from '../components/Header';

Enzyme.configure({ adapter: new Adapter() });

describe('Header', () => {
  const header = shallow(<Header />)

  it('has a cart', () => {
    expect(
      header.find('Cart')
    ).toHaveLength(1)
  })
})
