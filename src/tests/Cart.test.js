import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';

import Cart from '../components/Cart';

Enzyme.configure({ adapter: new Adapter() });

describe('Cart', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Cart
        cart={[]}
      />
    )
  })

  it('is a cart', () => {
    expect(true).toBe(true)
  })
})
