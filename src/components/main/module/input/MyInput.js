import React from 'react';

class MyInput extends React.Component {

  state = { value: '' };

  getValue() {
    return this.state.value
  }

  render() {
    return (
      <input style={{
        width: 80,
        height: 32,
        backgroundColor: 'transparent',
        border: '1px solid #fff',
        color: '#fff',
        paddingLeft: 10,
        ...this.props.style
      }}
        ref={refs => this.inputDom = refs}
        value={this.state.value}
        onChange={(e) => this.setState({ value: e.target.value })}
      />
    );
  }

};

export default MyInput;