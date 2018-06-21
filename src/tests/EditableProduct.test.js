import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';

import EditableProduct from '../components/EditableProduct';

Enzyme.configure({ adapter: new Adapter() });

describe('EditableProduct', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <EditableProduct
        id={1}
        title='Tomagatchi'
        price='12.99'
        quantity={100}
      />
    )
  })

  it('displays a name', () => {
    expect(
      wrapper.find('h3').text()
    ).toEqual('Tomagatchi')
  })

  it('displays a price', () => {
    expect(
      wrapper.find('.price').text()
    ).toEqual('$12.99')
  })

  it('displays a quantity', () => {
    expect(
      wrapper.find('.quantity').text()
    ).toEqual('100 left in stock')
  })

  it('displays add button if it has a quantity', () => {
    expect(
      wrapper.find('.add-to-cart').first().hasClass('disabled')
    ).toEqual(false)
  })

  it('disables add button if it has no quantity', () => {
    wrapper.setProps({quantity: 0})
    expect(
      wrapper.find('.add-to-cart').first().hasClass('disabled')
    ).toEqual(true)
  })

  it('has an edit button', () => {
    expect(
      wrapper.find('.edit')
    ).toHaveLength(1)
  })

  it('does not have an edit button when form isOpen', () => {
    wrapper.setState({editOpen: true})
    expect(
      wrapper.find('.edit').exists()
    ).toBe(false)
  })

  it('does not have an add button when form isOpen', () => {
    wrapper.setState({editOpen: true})
    expect(
      wrapper.find('.add-to-cart').exists()
    ).toBe(false)
  })
})
