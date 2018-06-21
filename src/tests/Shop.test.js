import React from 'react';
import ReactDOM from 'react-dom';
import Shop from '../components/Shop';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<Shop />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

describe('Shop', () => {

  it('adds product to cart', () => {
    let products = [
      {
        id: 1,
        title: 'My Product',
        price: '19.99',
        quantity: 5
      }
    ];

    let wrapper = shallow(
      <Shop />
    );
    wrapper.setState({ products })
    const add = wrapper.find('.product').first().find('add-to-cart').first();
    add.simulate('click', {

    })

    expect(wrapper.state().cart.length).toEqual(1)
  });
});
