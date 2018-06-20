import React, { Component } from 'react';

class Field extends Component {
  state = {
    value: '',
  }

  componentWillReceiveProps(update) {
    this.setState({value: update.value});
  }

  updateInputState = (e) => {
    let input = e.target.value
    this.props.onChange(this.props.name, input)
  }

  render() {
    return(
      <div className='input-group'>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        
        <input type='text' id={this.props.name}
          value={this.state.value} 
          onChange={this.updateInputState}
        />
      </div>
    );
   }
}

export default Field;